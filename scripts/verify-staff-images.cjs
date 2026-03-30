const fs = require('fs');
const path = require('path');

// Read the Staff.tsx file to get all referenced images
const staffFilePath = path.join(__dirname, '../pages/shkolla/Staff.tsx');
const content = fs.readFileSync(staffFilePath, 'utf8');

// Extract all image paths
const imagePaths = content.match(/image: "([^"]+)"/g) || [];
const referencedImages = imagePaths.map(path => path.match(/"([^"]+)"/)[1]);

// Get all actual files in the stafi directory
const stafiDir = path.join(__dirname, '../public/stafi');
const actualFiles = fs.existsSync(stafiDir) ? fs.readdirSync(stafiDir) : [];

console.log('🔍 Checking staff images...\n');

// Check for missing images
const missingImages = [];
referencedImages.forEach(imagePath => {
  const filename = imagePath.split('/').pop();
  if (!actualFiles.includes(filename)) {
    missingImages.push({ path: imagePath, filename });
  }
});

// Check for extra files (not referenced)
const referencedFilenames = referencedImages.map(imagePath => imagePath.split('/').pop());
const extraFiles = actualFiles.filter(file => !referencedFilenames.includes(file) && file !== 'desktop.ini');

// Report results
if (missingImages.length === 0) {
  console.log('✅ All referenced images exist in the stafi directory');
} else {
  console.log('❌ Missing images:');
  missingImages.forEach(({ path, filename }) => {
    console.log(`   - ${path} (looking for: ${filename})`);
  });
}

if (extraFiles.length > 0) {
  console.log('\n📁 Extra files (not referenced in Staff.tsx):');
  extraFiles.forEach(file => {
    console.log(`   - ${file}`);
  });
}

// Check for very small files (potentially corrupted)
const smallFiles = actualFiles
  .filter(file => file !== 'desktop.ini')
  .map(file => {
    const filePath = path.join(stafiDir, file);
    const stats = fs.statSync(filePath);
    return { file, size: stats.size };
  })
  .filter(({ size }) => size < 5000); // Less than 5KB

if (smallFiles.length > 0) {
  console.log('\n⚠️  Very small files (may be corrupted):');
  smallFiles.forEach(({ file, size }) => {
    console.log(`   - ${file} (${size} bytes)`);
  });
}

console.log(`\n📊 Summary:`);
console.log(`   - Referenced images: ${referencedImages.length}`);
console.log(`   - Actual files: ${actualFiles.length - 1}`); // -1 for desktop.ini
console.log(`   - Missing: ${missingImages.length}`);
console.log(`   - Extra: ${extraFiles.length}`);
console.log(`   - Small files: ${smallFiles.length}`);
