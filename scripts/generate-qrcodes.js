const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'qr');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Exactly one single universal QR code for each application:
// - Android: Automatically routes to Google Play Store
// - iOS: Automatically routes to Apple App Store
const targets = [
  {
    name: 'qr-user-app',
    title: 'Well Wisher User App (Universal - iOS & Android)',
    url: 'https://www.wellwisherinfo.com/download/user',
    color: {
      dark: '#031124', // Clean, high-contrast dark
      light: '#ffffff',
    },
  },
  {
    name: 'qr-partner-app',
    title: 'Well Wisher Partner / Caretaker App (Universal - iOS & Android)',
    url: 'https://www.wellwisherinfo.com/download/partner',
    color: {
      dark: '#031124', // Clean, high-contrast dark
      light: '#ffffff',
    },
  },
];

async function generateAll() {
  console.log('Generating single QR codes in:', outputDir);

  for (const item of targets) {
    const pngPath = path.join(outputDir, `${item.name}.png`);

    await QRCode.toFile(pngPath, item.url, {
      width: 1024,
      margin: 2,
      errorCorrectionLevel: 'H',
      color: item.color,
    });

    console.log(`✓ Generated: ${item.name}.png (${item.title}) -> ${item.url}`);
  }

  console.log('\nQR code generation complete.');
}

generateAll().catch((err) => {
  console.error('Error generating QR codes:', err);
  process.exit(1);
});
