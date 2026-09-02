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

async function getCategoryImages(catTitle) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${encodeURIComponent(catTitle)}&cmtype=file&cmlimit=10&prop=imageinfo&iiprop=url&format=json`;
  const res = await fetchJSON(url);
  const titles = [];
  if (res.query && res.query.categorymembers) {
    for (const cm of res.query.categorymembers) {
      titles.push(cm.title);
    }
  }
  return titles;
}

async function getFileUrl(fileTitle) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url&format=json`;
  const res = await fetchJSON(url);
  if (res.query && res.query.pages) {
    for (const p of Object.values(res.query.pages)) {
      if (p.imageinfo && p.imageinfo[0]) {
        return p.imageinfo[0].url;
      }
    }
  }
  return null;
}

async function main() {
  const cats = {
    haldi: ['Haldi_ceremony', 'Hindu_wedding_rituals'],
    mehendi: ['Mehndi_on_both_hands', 'Mehndi_patterns', 'Mehndi'],
    sangeet: ['Garba', 'Bhangra_(dance)', 'Indian_wedding_celebrations'],
    wedding: ['Wedding_mandaps', 'Hindu_wedding_rituals', 'Saat_phere'],
    palace: ['City_Palace,_Udaipur', 'Lake_Palace_(Udaipur)']
  };

  for (const [key, list] of Object.entries(cats)) {
    console.log(`Checking category for ${key}...`);
    for (const cat of list) {
      const files = await getCategoryImages(cat);
      console.log(`Cat: ${cat} -> ${files.length} files:`, files.slice(0, 3));
      for (let i = 0; i < Math.min(2, files.length); i++) {
        const fileUrl = await getFileUrl(files[i]);
        if (fileUrl) {
          const outFile = path.join(__dirname, 'public', `cat_${key}_${cat}_${i + 1}.jpg`);
          console.log(`Downloading ${key}: ${fileUrl}`);
          await downloadFile(fileUrl, outFile);
        }
      }
    }
  }
}

main().catch(console.error);
