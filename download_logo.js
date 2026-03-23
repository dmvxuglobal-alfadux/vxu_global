const https = require('https');
const fs = require('fs');

const url = 'https://www.vxuglobal.com/_next/image?url=%2Fstatic%2Fmedia%2Flogo.fbca3a24.png&w=384&q=75';
const file = fs.createWriteStream('./public/logo.png');

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Referer': 'https://www.vxuglobal.com/',
    'Accept': 'image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
  }
}, (response) => {
  if (response.statusCode === 200) {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Logo downloaded successfully!');
    });
  } else {
    console.error(`Failed to download logo. Status code: ${response.statusCode}`);
  }
}).on('error', (err) => {
  console.error(`Error downloading logo: ${err.message}`);
});
