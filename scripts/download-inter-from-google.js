const https = require('https');
const fs = require('fs');
const path = require('path');

const cssUrl = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap';
const outDir = path.join(__dirname, '..', 'public', 'fonts', 'inter');

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

https.get(cssUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
  let css = '';
  res.on('data', d => css += d);
  res.on('end', async () => {
    try{
      const re = /@font-face\s*{[^}]*font-weight:\s*(\d+);[^}]*url\(([^)]+)\)[^}]*format\('woff2'\)[^}]*}/g;
      const matches = [...css.matchAll(re)];
      if(matches.length === 0){
        console.error('No woff2 entries found in CSS response');
        process.exit(2);
      }
      mkdirp(outDir);
      const downloads = matches.map(m => {
        const weight = m[1];
        const url = m[2].replace(/"/g,'').replace(/'/g,'');
        const dest = path.join(outDir, `Inter-${weight}.woff2`);
        return download(url, dest).then(()=>({weight,dest}));
      });
      const results = await Promise.allSettled(downloads);
      results.forEach(r => {
        if(r.status === 'fulfilled') console.log('Saved', r.value);
        else console.error('Failed', r.reason && r.reason.message);
      });
      const files = fs.readdirSync(outDir).map(f=>({file:f, size:fs.statSync(path.join(outDir,f)).size}));
      console.log('Files in', outDir, JSON.stringify(files, null, 2));
    }catch(e){
      console.error('Parse error', e.message);
      process.exit(2);
    }
  });
}).on('error', e => {
  console.error('Request failed', e.message);
  process.exit(2);
});
