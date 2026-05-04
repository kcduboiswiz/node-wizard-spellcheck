# Spellbook Analyzer 🧙‍♂️📖

An ancient Node.js library for analyzing magical spellbooks, scrolls, and incantations. 

*Beware: Dark magic (vulnerable dependencies) lurks within these pages. Use for Software Composition Analysis (SCA) demonstrations.*

## Getting Started

To prepare your magical environment:

```bash
npm install
```

## Usage

### As a Library

```javascript
const { analyzeSpellbook } = require('spellbook-analyzer');

const result = analyzeSpellbook({
  spell: 'fireball',
  cursedConfig: { __proto__: { cursed: true } }
});
console.log(result);
```

### CLI

You can also cast spells or decipher scrolls by running the CLI script:

```bash
# Cast a simple spell
node cli.js --spell="fireball"

# Attempt to merge a cursed config (Prototype Pollution via lodash)
node cli.js --cursedConfig='{"__proto__": {"cursed": true}}'
```

## Dark Secrets (Vulnerabilities)

This project intentionally includes older versions of packages to demonstrate SCA tools:
- **`lodash@4.17.15`**: Prototype Pollution (CVE-2019-10744 / CVE-2020-8203)
- **`minimist@1.2.5`**: Prototype Pollution (CVE-2021-44906)
- **`marked@0.3.5`**: Regular Expression Denial of Service (ReDoS) (CVE-2017-1000277)
