const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

fs.readdirSync(imagesDir).forEach(file => {
  if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace(/\.jpe?g$/, '.webp'));

    sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath)
      .then(info => {
        const origSize = fs.statSync(inputPath).size;
        const newSize = info.size;
        console.log(`Converted ${file} -> ${path.basename(outputPath)}: ${(origSize/1024).toFixed(1)}KB -> ${(newSize/1024).toFixed(1)}KB (-${Math.round((1 - newSize/origSize)*100)}%)`);
      })
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
});
