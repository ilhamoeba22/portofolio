const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public');
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
const makeSvg = (title, subtitle) => `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" x2="1">
      <stop offset="0%" stop-color="#2b076e" />
      <stop offset="100%" stop-color="#6f42c1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)" />
  <g transform="translate(60,120)">
    <text x="0" y="0" font-family="Inter, Arial, sans-serif" font-size="56" fill="#fff" font-weight="700">${esc(title)}</text>
    <text x="0" y="80" font-family="Inter, Arial, sans-serif" font-size="28" fill="#e8e8ff">${esc(subtitle)}</text>
  </g>
</svg>
`;

(async ()=>{
  try{
    const title = 'Muhammad Ilham Pratama';
    const subtitle = 'IT Specialist & Backend Engineer';
    const svg = makeSvg(title, subtitle);
    await sharp(Buffer.from(svg)).png().toFile(path.join(outDir, 'opengraph-image.png'));
    await sharp(Buffer.from(svg)).resize(1200,630).png().toFile(path.join(outDir, 'twitter-image.png'));
    console.log('Generated opengraph-image.png and twitter-image.png in public/');
  }catch(e){
    console.error('Failed to generate images', e);
    process.exit(2);
  }
})();
