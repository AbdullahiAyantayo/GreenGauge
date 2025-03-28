const fs = require('fs');
const { createCanvas } = require('canvas');

const companies = [
  'carbon-direct',
  'helion',
  'moment',
  'sublime',
  'carboncure',
  'amp',
  'blocpower',
  'nexus'
];

function generateLogo(name) {
  const canvas = createCanvas(64, 64);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#E5F2E5';
  ctx.beginPath();
  ctx.arc(32, 32, 32, 0, Math.PI * 2);
  ctx.fill();

  // Text
  ctx.fillStyle = '#10B981';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(name.charAt(0).toUpperCase(), 32, 32);

  // Save the logo
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`public/${name}.png`, buffer);
}

// Generate logos for all companies
companies.forEach(company => {
  generateLogo(company);
}); 