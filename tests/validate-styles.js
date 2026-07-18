const fs = require('fs');
const path = require('path');

const STYLES_DIR = path.join(__dirname, '..', '.claude', 'promptoptimizer100', 'styles');
const INDEX_PATH = path.join(__dirname, '..', '.claude', 'promptoptimizer100', 'index.json');
const SKILL_PATH = path.join(__dirname, '..', '.claude', 'skills', 'promptoptimizer100', 'SKILL.md');
const ADDITIONS_PATH = path.join(__dirname, '..', '.claude', 'promptoptimizer100', 'additions.json');

let passed = 0;
let failed = 0;

function assert(condition, msg) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${msg}`);
  } else {
    failed++;
    console.log(`  ✗ ${msg}`);
  }
}

// 1. Skill file exists
console.log('\n📄 Skill file:');
assert(fs.existsSync(SKILL_PATH), 'promptoptimizer100.md exists');

// 2. Index file exists and is valid JSON
console.log('\n📇 Index:');
assert(fs.existsSync(INDEX_PATH), 'index.json exists');
const index = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf-8'));
assert(typeof index.categories === 'object', 'categories is an object');

const categoryNames = Object.keys(index.categories);
assert(categoryNames.length > 0, `has ${categoryNames.length} categories`);
assert(categoryNames.length >= 10, 'at least 10 categories');

// 3. Additions file
console.log('\n🧩 Additions:');
assert(fs.existsSync(ADDITIONS_PATH), 'additions.json exists');
const additions = JSON.parse(fs.readFileSync(ADDITIONS_PATH, 'utf-8'));
assert(Array.isArray(additions.additions), 'additions is an array');
assert(additions.additions.length === 5, 'exactly 5 additions');

// 4. Style files exist
console.log('\n🎨 Style files:');
assert(fs.existsSync(STYLES_DIR), 'styles directory exists');

const allStyleFiles = fs.readdirSync(STYLES_DIR).filter(f => f.endsWith('.md'));
assert(allStyleFiles.length === 100, `exactly 100 style files (found ${allStyleFiles.length})`);

// 5. Every style in index has a corresponding file
console.log('\n🔗 Index → file mapping:');
let missingFiles = [];
let extraFiles = [];

const indexedFiles = new Set();
for (const [cat, data] of Object.entries(index.categories)) {
  for (const style of data.styles) {
    indexedFiles.add(style);
    if (!allStyleFiles.includes(`${style}.md`)) {
      missingFiles.push(style);
    }
  }
}

for (const f of allStyleFiles) {
  const name = f.replace('.md', '');
  if (!indexedFiles.has(name)) {
    extraFiles.push(name);
  }
}

assert(missingFiles.length === 0, `no missing style files${missingFiles.length ? ': ' + missingFiles.join(', ') : ''}`);
assert(extraFiles.length === 0, `no extra style files${extraFiles.length ? ': ' + extraFiles.join(', ') : ''}`);

// 6. All style files have content
console.log('\n📝 Style file content:');
let emptyFiles = [];
for (const f of allStyleFiles) {
  const content = fs.readFileSync(path.join(STYLES_DIR, f), 'utf-8');
  if (content.trim().length < 20) {
    emptyFiles.push(f);
  }
}
assert(emptyFiles.length === 0, `no empty style files${emptyFiles.length ? ': ' + emptyFiles.join(', ') : ''}`);

// 7. Category counts match index
console.log('\n📊 Category counts:');
let indexTotal = 0;
for (const [cat, data] of Object.entries(index.categories)) {
  indexTotal += data.styles.length;
}
assert(indexTotal === 100, `index references exactly 100 styles (${indexTotal})`);

console.log(`\n${'='.repeat(40)}`);
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log(`${'='.repeat(40)}`);

process.exit(failed > 0 ? 1 : 0);
