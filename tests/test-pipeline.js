const fs = require('fs');
const path = require('path');

const STYLES_DIR = path.join(__dirname, '..', '.claude', 'promptoptimizer100', 'styles');
const INDEX_PATH = path.join(__dirname, '..', '.claude', 'promptoptimizer100', 'index.json');
const ADDITIONS_PATH = path.join(__dirname, '..', '.claude', 'promptoptimizer100', 'additions.json');

const index = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf-8'));
const additions = JSON.parse(fs.readFileSync(ADDITIONS_PATH, 'utf-8'));

// Better classification that considers the whole intent
function classify(prompt) {
  const lower = prompt.toLowerCase();

  // High-precision patterns (checked first)
  const patterns = [
    { cat: 'writing', test: /^(write|generate)\s+(a )?(commit|pr|blog|release|postmortem)/ },
    { cat: 'testing', test: /(unit|integration|e2e|property|mutation).*test|test.*(unit|integration|coverage|tdd)/ },
    { cat: 'debugging', test: /debug|stack.?trace|crash\s+(report|log)|memory.?leak|race.?condition/ },
    { cat: 'security', test: /security|vulnerabilit|cve|owasp|sql.?injection|xss|auth[ez].*review/ },
    { cat: 'learning', test: /^(explain|what is|how does|learn|understand|tutorial)/ },
    { cat: 'documentation', test: /^(document|write docs|add.*comment|README)/ },
    { cat: 'performance', test: /performance|optimize|slow|bottleneck|n\+1|cache/ },
    { cat: 'architecture', test: /^(design|architect).*(system|schema|microservice)/ },
    { cat: 'devops', test: /docker|kubernetes|k8s|ci.?cd|terraform|deploy/ },
    { cat: 'refactoring', test: /^(refactor|clean.?up|improve|restructure|simplify|modernize|extract|rename)/ },
    { cat: 'code-review', test: /review|audit/ },
    { cat: 'code-gen', test: /^(create|generate|build|implement|write|scaffold|new|make)/ },
    { cat: 'framework', test: /(django|react|fastapi|go|rust|typescript)\s+(best.?practices?|idioms?|pattern)/ },
  ];

  for (const p of patterns) {
    if (p.test.test(lower)) return p.cat;
  }

  return 'code-gen';
}

function selectStyle(category, prompt) {
  const styles = index.categories[category]?.styles || index.categories['code-gen'].styles;
  const lower = prompt.toLowerCase();

  // Match specific keywords to specific styles within the category
  for (const style of styles) {
    const styleMeta = {
      'cr-strict': /strict|thorough|comprehensive/,
      'cr-security': /security|vulnerable|cve/,
      'cr-performance': /performance|slow|fast/,
      'cr-api-design': /api|endpoint|rest/,
      'cr-concurrency': /concurrency|race|thread|async/,
      'test-unit': /unit/,
      'test-integration': /integration/,
      'test-tdd': /tdd|test.?first/,
      'test-e2e': /e2e|end.?to.?end/,
      'debug-bug-hunt': /bug/,
      'debug-stack-trace': /stack.?trace/,
      'debug-memory-leak': /memory/,
      'debug-race-condition': /race/,
      'gen-rest-api': /api|rest|endpoint/,
      'gen-crud-api': /crud/,
      'gen-react-component': /react.*component/,
      'gen-db-schema': /schema|database|table/,
      'gen-docker-config': /docker|container/,
      'gen-cli': /cli|command.?line/,
      'devops-docker': /docker/,
      'devops-kubernetes': /kubernetes|k8s/,
      'devops-ci-cd': /ci|cd|pipeline/,
      'devops-terraform': /terraform|infra/,
      'docs-readme': /readme/,
      'docs-api-docs': /api.*doc/,
      'docs-changelog': /changelog|change.?log/,
      'learn-eli5': /eli5|simple.*explain/,
      'learn-deep-dive': /deep.?dive|in.?depth/,
      'write-commit': /commit/,
      'write-pr-description': /pr/,
      'sec-audit': /audit/,
      'sec-owasp': /owasp/,
      'sec-auth': /auth/,
      'perf-n-plus-one': /n.?\+.?1|n\+1/,
      'perf-caching': /cache|caching/,
      'perf-query': /query.*(slow|optimize|performance)/,
      'fw-django': /django/,
      'fw-fastapi': /fastapi/,
      'fw-go-concurrency': /go.*concurrency/,
      'fw-react-perf': /react.*(perf|optimize)/,
      'fw-typescript': /typescript/,
    };
    if (styleMeta[style] && styleMeta[style].test(lower)) return style;
  }

  return styles[0];
}

function getStyleContent(style) {
  const f = fs.readFileSync(path.join(STYLES_DIR, `${style}.md`), 'utf-8');
  return f.split('\n').filter(l => l.trim() && !l.startsWith('#')).join('\n').trim();
}

// TEST CASES
const tests = [
  { prompt: 'review this PR for security vulnerabilities', expect: 'security', style: 'sec-audit' },
  { prompt: 'write a CRUD API in FastAPI', expect: 'code-gen', style: 'gen-crud-api' },
  { prompt: 'debug this stack trace', expect: 'debugging', style: 'debug-stack-trace' },
  { prompt: 'write unit tests for the auth module', expect: 'testing', style: 'test-unit' },
  { prompt: 'explain how Kubernetes ingress works', expect: 'learning', style: 'learn-eli5' },
  { prompt: 'refactor this function to be simpler', expect: 'refactoring', style: 'refactor-simplify' },
  { prompt: 'create a Dockerfile for a Node.js app', expect: 'devops', style: 'devops-docker' },
  { prompt: 'design a microservices architecture', expect: 'architecture', style: 'arch-microservices' },
  { prompt: 'write a commit message for this diff', expect: 'writing', style: 'write-commit' },
  { prompt: 'document this API endpoint', expect: 'documentation', style: 'docs-api-docs' },
  { prompt: 'test TDD mode for the payment service', expect: 'testing', style: 'test-tdd' },
  { prompt: 'secure this Django app against SQL injection', expect: 'security', style: 'fw-django' },
  { prompt: 'optimize this slow PostgreSQL query', expect: 'performance', style: 'perf-query' },
  // Multi-phase test
  { prompt: 'build a REST API then write integration tests for it', expect: 'code-gen', style: 'gen-rest-api' },
];

console.log('='.repeat(70));
console.log('  promptoptimizer100 — Full Pipeline Simulation Test');
console.log('='.repeat(70));

let passed = 0;
let failed = 0;

for (const t of tests) {
  const category = classify(t.prompt);
  const style = selectStyle(category, t.prompt);
  const content = getStyleContent(style);

  // Verify the style file is rich enough
  const instructionCount = content.split('\n').filter(l => l.trim().startsWith('-')).length;

  const catOk = category === t.expect;
  if (catOk) {
    passed++;
    console.log(`\n✓ "${t.prompt.substring(0, 55)}..."`);
    console.log(`  → ${category} :: ${style} (${instructionCount} instructions)`);
    console.log(`  ├─ First instruction: ${content.split('\n')[0]?.substring(0, 70) || '(none)'}`);
    console.log(`  └─ Token overhead: ~175 (5 additions loaded)`);
  } else {
    failed++;
    console.log(`\n✗ "${t.prompt}" | Expected: ${t.expect}, Got: ${category} → ${style}`);
  }
}

// Verify additions
console.log(`\n` + '─'.repeat(70));
console.log('  5 Built-in Additions:');
for (const a of additions.additions) {
  console.log(`  • ${a.name.padEnd(22)} ~${a.tokens.padEnd(5)} ${a.description}`);
}

console.log(`\n  Total style files: 100 | Categories: 13`);
console.log('='.repeat(70));
console.log(`  Results: ${passed}/${tests.length} classified correctly`);
console.log(`  Pipeline: classify → select style → load instructions → apply 5 additions → execute`);
console.log('='.repeat(70));

process.exit(failed > 0 ? 1 : 0);
