const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const TARGET = process.argv[2] || process.cwd();
const SCRIPT_DIR = path.join(__dirname, '..');

function install() {
  const claudeDir = path.join(TARGET, '.claude');
  const skillDir = path.join(claudeDir, 'skills');
  const stylesDir = path.join(claudeDir, 'promptoptimizer100');

  // Ensure target dirs
  fs.mkdirSync(skillDir, { recursive: true });
  fs.mkdirSync(path.join(stylesDir, 'styles'), { recursive: true });

  // Copy skill directory
  fs.cpSync(path.join(SCRIPT_DIR, '.claude', 'skills', 'promptoptimizer100'),
             path.join(skillDir, 'promptoptimizer100'), { recursive: true });

  // Copy index + additions
  fs.cpSync(path.join(SCRIPT_DIR, '.claude', 'promptoptimizer100', 'index.json'),
             path.join(stylesDir, 'index.json'));
  fs.cpSync(path.join(SCRIPT_DIR, '.claude', 'promptoptimizer100', 'additions.json'),
             path.join(stylesDir, 'additions.json'));

  // Copy styles
  const srcStyles = path.join(SCRIPT_DIR, '.claude', 'promptoptimizer100', 'styles');
  if (fs.existsSync(srcStyles)) {
    fs.cpSync(srcStyles, path.join(stylesDir, 'styles'), { recursive: true });
  }

  const styleCount = fs.readdirSync(path.join(stylesDir, 'styles')).filter(f => f.endsWith('.md')).length;
  console.log(`✓ promptoptimizer100 installed — ${styleCount} styles ready`);
}

install();
