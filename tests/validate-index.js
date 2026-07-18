const fs = require('fs');
const path = require('path');

const INDEX_PATH = path.join(__dirname, '..', '.claude', 'promptoptimizer100', 'index.json');

let passed = 0;
let failed = 0;

function assert(condition, msg) {
  if (condition) {
    passed++;
  } else {
    failed++;
    console.log(`  ✗ ${msg}`);
  }
}

console.log('\n🔍 Index validation:');
const index = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf-8'));
assert(index.version, 'has version field');
assert(index.categories, 'has categories');

for (const [cat, data] of Object.entries(index.categories)) {
  assert(data.description, `category '${cat}' has description`);
  assert(Array.isArray(data.styles), `category '${cat}' has styles array`);
  assert(data.styles.length >= 4, `category '${cat}' has at least 4 styles (${data.styles.length})`);

  for (const style of data.styles) {
    assert(/^[a-z][a-z0-9-]+$/.test(style),
      `style '${style}' is valid kebab-case in category '${cat}'`);
  }
}

// Check no duplicate style names across categories
const allStyles = new Map();
for (const [cat, data] of Object.entries(index.categories)) {
  for (const style of data.styles) {
    if (allStyles.has(style)) {
      console.log(`  ✗ DUPLICATE: '${style}' in '${cat}' already in '${allStyles.get(style)}'`);
      failed++;
    } else {
      allStyles.set(style, cat);
    }
  }
}

const totalStyles = allStyles.size;
console.log(`\nTotal indexed styles: ${totalStyles}`);
assert(totalStyles === 100, `exactly 100 indexed styles (${totalStyles})`);

console.log(`\nResults: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
