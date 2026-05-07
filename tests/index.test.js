const test = require('node:test');
const assert = require('node:assert');
const { analyzeSpellbook, enchant_document } = require('../index');

test('index.js unit tests', async (t) => {
  await t.test('analyzeSpellbook should merge configuration and parse markdown', () => {
    const options = {
      spell: 'fireball',
      cursedConfig: '{"mana": 200}',
      notes: '# Warning\nBe careful.'
    };
    
    const result = analyzeSpellbook(options);
    
    assert.strictEqual(result.grimoire.mana, 200);
    assert.ok(result.decipheredHtml.includes('<h1 id="warning">Warning</h1>'));
  });

  await t.test('enchant_document should prefix title and preserve HTML', () => {
    const md = '# My Scroll\n<script>alert(1)</script>';
    const html = enchant_document(md);
    
    assert.ok(html.includes('Enchanted: My Scroll'));
    assert.ok(html.includes('<script>alert(1)</script>'));
  });
});
