const test = require('node:test');
const assert = require('node:assert');
const { execSync } = require('child_process');
const path = require('path');

test('cli.js integration tests', async (t) => {
  await t.test('cli should run and output JSON result', () => {
    const cliPath = path.join(__dirname, '../cli.js');
    const command = `node ${cliPath} --spell="frostbolt" --notes="# Cold"`;
    
    const output = execSync(command).toString();
    
    assert.ok(output.includes('Casting spell: frostbolt...'));
    assert.ok(output.includes('Result:'));
    assert.ok(output.includes('frostbolt'));
    assert.ok(output.includes('<h1 id="cold">Cold</h1>'));
  });
});
