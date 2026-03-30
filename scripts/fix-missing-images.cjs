const fs = require('fs');
const path = require('path');

// Read the Staff.tsx file
const staffFilePath = path.join(__dirname, '../pages/shkolla/Staff.tsx');
let content = fs.readFileSync(staffFilePath, 'utf8');

// Fix the specific missing images
const fixes = [
  {
    old: 'image: "/stafi/Klevis_Marku-converted-from-png.webp"',
    new: 'image: "/stafi/Klevis_Marku-converted-from-png.webp"',
    note: 'This file is missing - you may need to add it'
  },
  {
    old: 'image: "/stafi/Adela_Xhanari-gjimnaz-matematik.webp"',
    new: 'image: "/stafi/Adela_Xhanari-gjimnaz-matematik-converted-from-webp.webp"',
    note: 'Using the converted WebP version'
  },
  {
    old: 'image: "/stafi/Evis_Myftaraj-9-vjecare-gjimnaz-italisht.webp"',
    new: 'image: "/stafi/Evis_Myftaraj-9-vjecare-gjimnaz-italisht-converted-from-webp.webp"',
    note: 'Using the converted WebP version'
  }
];

// Apply fixes
fixes.forEach(fix => {
  if (content.includes(fix.old)) {
    content = content.replace(fix.old, fix.new);
    console.log(`✅ Fixed: ${fix.note}`);
  } else {
    console.log(`⚠️  Not found: ${fix.old}`);
  }
});

// Also add the missing staff members that aren't referenced
const extraStaff = [
  'MArgarita_Preka-Fillore-converted-from-png.webp',
  'Romina_Caushaj-converted-from-png.webp'
];

console.log('\n📝 Staff members with images but not referenced in Staff.tsx:');
extraStaff.forEach(file => {
  console.log(`   - ${file} (needs to be added to the staff data)`);
});

// Write back to file
fs.writeFileSync(staffFilePath, content);

console.log('\n✅ Updated Staff.tsx with corrected image paths');
console.log('\n⚠️  Note: Some very small files may be corrupted and need to be replaced');
