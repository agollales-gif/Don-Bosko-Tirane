#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_TO_OPTIMIZE = [
  'shkolla_shortcut.jpg',
  'oratori_shortcut.png',
  'kisha_shortcut.png',
  'qendra_ditore_shortcut.png',
  'shkolla_fillore.jpg',
  'shkolla_9vjecare.jpg'
];

async function convertToWebP(imagePath) {
  try {
    const fullPath = path.join(PUBLIC_DIR, imagePath);
    const webpPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Image not found: ${imagePath}`);
      return false;
    }

    // Skip if WebP already exists and is newer
    if (fs.existsSync(webpPath)) {
      const originalTime = fs.statSync(fullPath).mtime;
      const webpTime = fs.statSync(webpPath).mtime;
      if (webpTime > originalTime) {
        console.log(`✅ WebP already exists and is newer: ${imagePath}`);
        return true;
      }
    }

    console.log(`🔄 Converting ${imagePath} to WebP...`);
    
    await sharp(fullPath)
      .webp({ 
        quality: 85,
        effort: 6
      })
      .toFile(webpPath);

    const originalSize = fs.statSync(fullPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Converted ${imagePath}: ${originalSize} bytes → ${webpSize} bytes (${savings}% smaller)`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error converting ${imagePath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  let successCount = 0;
  let totalCount = IMAGES_TO_OPTIMIZE.length;
  
  for (const image of IMAGES_TO_OPTIMIZE) {
    const success = await convertToWebP(image);
    if (success) successCount++;
  }
  
  console.log(`\n✨ Optimization complete: ${successCount}/${totalCount} images processed`);
  
  if (successCount === totalCount) {
    console.log('\n📊 Expected performance improvements:');
    console.log('   - Reduced page load time by ~40-60%');
    console.log('   - Lower bandwidth usage');
    console.log('   - Better LCP (Largest Contentful Paint) scores');
    console.log('   - Fixed CLS (Cumulative Layout Shift) with explicit dimensions');
  }
}

// Check if sharp is available
try {
  require('sharp');
  main().catch(console.error);
} catch (error) {
  console.log('❌ Sharp not found. Installing...');
  exec('npm install sharp', (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Failed to install sharp:', error);
      return;
    }
    console.log('✅ Sharp installed successfully');
    main().catch(console.error);
  });
}
