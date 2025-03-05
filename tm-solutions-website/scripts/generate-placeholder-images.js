const fs = require('fs');
const path = require('path');

// Zorg ervoor dat de images map bestaat
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Functie om een SVG placeholder te maken
function createPlaceholderSVG(width, height, text, bgColor = '#3B82F6', textColor = '#FFFFFF') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
  </svg>`;
}

// Maak logo placeholders
const logoSVG = createPlaceholderSVG(150, 40, 'TM Solutions', '#3B82F6', '#FFFFFF');
fs.writeFileSync(path.join(imagesDir, 'logo.svg'), logoSVG);

const logoWhiteSVG = createPlaceholderSVG(150, 40, 'TM Solutions', '#1F2937', '#FFFFFF');
fs.writeFileSync(path.join(imagesDir, 'logo-white.svg'), logoWhiteSVG);

// Maak afbeeldingen voor de hero sectie
const heroSVG = createPlaceholderSVG(600, 500, 'Hero Image', '#3B82F6', '#FFFFFF');
fs.writeFileSync(path.join(imagesDir, 'hero-image.svg'), heroSVG);

// Maak afbeeldingen voor de about sectie
const aboutSVG = createPlaceholderSVG(600, 450, 'About Image', '#10B981', '#FFFFFF');
fs.writeFileSync(path.join(imagesDir, 'about-image.svg'), aboutSVG);

// Maak afbeeldingen voor de services sectie
const services = [
  { name: 'web', color: '#3B82F6' },
  { name: 'app', color: '#10B981' },
  { name: 'design', color: '#F59E0B' },
  { name: 'consultancy', color: '#6366F1' },
  { name: 'ecommerce', color: '#EC4899' },
  { name: 'cloud', color: '#8B5CF6' },
];

services.forEach(service => {
  const serviceSVG = createPlaceholderSVG(400, 300, `${service.name.charAt(0).toUpperCase() + service.name.slice(1)} Service`, service.color, '#FFFFFF');
  fs.writeFileSync(path.join(imagesDir, `service-${service.name}.svg`), serviceSVG);
});

// Maak afbeeldingen voor de portfolio sectie
for (let i = 1; i <= 6; i++) {
  const portfolioSVG = createPlaceholderSVG(500, 350, `Portfolio ${i}`, i % 2 === 0 ? '#10B981' : '#3B82F6', '#FFFFFF');
  fs.writeFileSync(path.join(imagesDir, `portfolio-${i}.svg`), portfolioSVG);
}

console.log('Placeholder afbeeldingen zijn gegenereerd in de public/images map.'); 