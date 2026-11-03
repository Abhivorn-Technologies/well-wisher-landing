const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'qr');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Canonical QR Code targets
const targets = [
  {
    name: 'qr-download',
    title: 'Well Wisher Download Hub (All Apps & Devices)',
    url: 'https://www.wellwisherinfo.com/download',
    color: {
      dark: '#031124', // Clean, high-contrast dark
      light: '#ffffff',
    },
  },
  {
    name: 'qr-user-app',
    title: 'Well Wisher User App (Universal - iOS & Android)',
    url: 'https://www.wellwisherinfo.com/download/user',
    color: {
      dark: '#031124',
      light: '#ffffff',
    },
  },
  {
    name: 'qr-partner-app',
    title: 'Well Wisher Partner / Caretaker App (Universal - iOS & Android)',
    url: 'https://www.wellwisherinfo.com/download/partner',
    color: {
      dark: '#031124',
      light: '#ffffff',
    },
  },
];

async function generateAll() {
  console.log('Generating QR codes in:', outputDir);

  for (const item of targets) {
    const pngPath = path.join(outputDir, `${item.name}.png`);
    const svgPath = path.join(outputDir, `${item.name}.svg`);

    // High-resolution 1024x1024 PNG
    await QRCode.toFile(pngPath, item.url, {
      width: 1024,
      margin: 2,
      errorCorrectionLevel: 'H',
      color: item.color,
    });

    // Crisp scalable vector SVG
    const svgString = await QRCode.toString(item.url, {
      type: 'svg',
      margin: 2,
      errorCorrectionLevel: 'H',
      color: item.color,
    });
    fs.writeFileSync(svgPath, svgString, 'utf8');

    console.log(`✓ Generated: ${item.name}.png & ${item.name}.svg (${item.title}) -> ${item.url}`);
  }

  console.log('\nQR code generation complete.');
}

generateAll().catch((err) => {
  console.error('Error generating QR codes:', err);
  process.exit(1);
});
