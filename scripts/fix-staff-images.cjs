const fs = require('fs');
const path = require('path');

// Read the Staff.tsx file
const staffFilePath = path.join(__dirname, '../pages/shkolla/Staff.tsx');
let content = fs.readFileSync(staffFilePath, 'utf8');

// Function to convert image paths to WebP
function convertToWebP(content) {
    // Replace all image paths with WebP versions
    return content
        .replace(/image: "\/stafi\/([^"]+)\.png"/g, 'image: "/stafi/$1-converted-from-png.webp"')
        .replace(/image: "\/stafi\/([^"]+)\.jpeg"/g, 'image: "/stafi/$1-converted-from-jpeg.webp"')
        .replace(/image: "\/stafi\/([^"]+)\.jpg"/g, 'image: "/stafi/$1-converted-from-jpg.webp"')
        .replace(/image: "\/stafi\/([^"]+)\.webp"/g, 'image: "/stafi/$1.webp"'); // Keep existing WebP files
}

// Update the content
const updatedContent = convertToWebP(content);

// Write back to file
fs.writeFileSync(staffFilePath, updatedContent);

console.log('✅ Updated Staff.tsx with WebP image paths');
console.log('📊 Image format conversion completed');
