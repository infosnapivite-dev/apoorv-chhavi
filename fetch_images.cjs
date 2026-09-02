const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'WeddingInvitesBot/1.0 (contact@wedding.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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
  const searches = {
    haldi: 'Haldi ceremony bride',
    mehendi: 'Mehndi hands Indian wedding',
    sangeet: 'Indian wedding dance',
    wedding: 'Hindu wedding mandap',
    reception: 'Indian wedding couple reception',
    palace: 'City Palace Udaipur night'
  };

  for (const [key, q] of Object.entries(searches)) {
    console.log(`Searching Wikimedia for ${key}: "${q}"...`);
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrlimit=3&prop=imageinfo&iiprop=url|mime&format=json`;
    try {
      const res = await fetchJSON(apiUrl);
      if (res.query && res.query.pages) {
        let i = 1;
        for (const pageId of Object.keys(res.query.pages)) {
          const page = res.query.pages[pageId];
          if (page.imageinfo && page.imageinfo[0]) {
            const imgUrl = page.imageinfo[0].url;
            const ext = path.extname(imgUrl) || '.jpg';
            const outFile = path.join(__dirname, 'public', `wiki_${key}_${i}${ext}`);
            console.log(`Downloading ${key} #${i}: ${imgUrl}`);
            await downloadFile(imgUrl, outFile);
            i++;
          }
        }
      }
    } catch (err) {
      console.error(`Error with ${key}:`, err.message);
    }
  }
}

main().catch(console.error);
