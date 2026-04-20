const https = require('https');
const fs = require('fs');
const path = require('path');

const api = 'https://google-webfonts-helper.herokuapp.com/api/fonts/inter?subsets=latin';
const outDir = path.join(__dirname, '..', 'public', 'fonts', 'inter');
const weights = [400, 500, 700];

function mkdirp(dir){
  if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest){
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if(res.statusCode >= 400) return reject(new Error('Failed to download: ' + url + ' (' + res.statusCode + ')'));
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(dest)));
    }).on('error', err => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

(async () => {
  try{
    mkdirp(outDir);
    https.get(api, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', async () => {
        try{
          const json = JSON.parse(data);
          const variants = json.variants || [];
          const downloads = [];
          for(const w of weights){
            const v = variants.find(x => Number(x.fontWeight) === w);
            if(!v) continue;
            // v.fonts may be an object with keys like regular, italic, etc. prefer woff2
            const fonts = v.fonts || {};
            const woff2 = fonts.woff2 || fonts['regular'] || Object.values(fonts)[0];
            if(!woff2) continue;
            const url = woff2;
            const dest = path.join(outDir, `Inter-${w}.woff2`);
            downloads.push(download(url, dest));
          }
          const results = await Promise.allSettled(downloads);
          results.forEach((r,i)=>{
            if(r.status === 'fulfilled') console.log('Saved', r.value);
            else console.error('Failed', r.reason && r.reason.message);
          });
          const files = fs.readdirSync(outDir).map(f=>({file:f, size:fs.statSync(path.join(outDir,f)).size}));
          console.log('Files in', outDir, JSON.stringify(files, null, 2));
        }catch(e){
          console.error('Parse error', e);
          process.exitCode = 2;
        }
      });
    }).on('error', e => {
      console.error('Request error', e);
      process.exitCode = 2;
    });
  }catch(e){
    console.error(e);
    process.exitCode = 2;
  }
})();
