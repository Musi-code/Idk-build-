import fs from 'fs';
import https from 'https';
import path from 'path';

const videoUrl = 'https://moewalls.com/wp-content/uploads/2022/10/cyberpunk-boy-on-rooftop-with-laptop-preview.mp4';
const outputDir = path.join(process.cwd(), 'src');
const outputPath = path.join(outputDir, 'hero-loop.mp4');

console.log(`Starting video download from: ${videoUrl}`);
console.log(`Saving to: ${outputPath}`);

// Ensure src directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const file = fs.createWriteStream(outputPath);

const requestOptions = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://moewalls.com/'
  }
};

const download = (url: string) => {
  https.get(url, requestOptions, (response) => {
    // Handle redirect
    if (response.statusCode === 301 || response.statusCode === 302) {
      console.log(`Following redirect to ${response.headers.location}`);
      download(response.headers.location!);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Failed to download video. Status code: ${response.statusCode}`);
      process.exit(1);
    }

    response.pipe(file);

    file.on('finish', () => {
      file.close();
      console.log('Video download completed successfully!');
      process.exit(0);
    });
  }).on('error', (err) => {
    fs.unlink(outputPath, () => {});
    console.error(`Error downloading video: ${err.message}`);
    process.exit(1);
  });
};

download(videoUrl);
