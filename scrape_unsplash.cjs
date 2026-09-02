const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function main() {
  const topics = {
    haldi: 'https://unsplash.com/s/photos/haldi',
    mehendi: 'https://unsplash.com/s/photos/mehndi',
    sangeet: 'https://unsplash.com/s/photos/indian-dance',
    wedding: 'https://unsplash.com/s/photos/mandap',
    reception: 'https://unsplash.com/s/photos/wedding-reception',
    palace: 'https://unsplash.com/s/photos/udaipur-palace'
  };

  for (const [key, searchUrl] of Object.entries(topics)) {
    console.log(`Searching ${key}...`);
    try {
      const html = await fetchHTML(searchUrl);
      const ids = html.match(/photo-[0-9]{10,14}-[a-zA-Z0-9]+/g);
      if (ids && ids.length > 0) {
        const unique = [...new Set(ids)];
        console.log(`Found ${unique.length} ids for ${key}:`, unique.slice(0, 3));
        for (let i = 0; i < Math.min(2, unique.length); i++) {
          const rawUrl = `https://images.unsplash.com/${unique[i]}?auto=format&fit=crop&w=800&fm=webp&q=85`;
          const outFile = path.join(__dirname, 'public', `pure_${key}_${i + 1}.webp`);
          await downloadFile(rawUrl, outFile);
          console.log(`Saved ${outFile}`);
        }
      } else {
        console.log(`No IDs for ${key}`);
      }
    } catch (e) {
      console.error(e);
    }
  }
}

main().catch(console.error);
