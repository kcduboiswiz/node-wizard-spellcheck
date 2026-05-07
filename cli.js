const minimist = require('minimist');
const { analyzeSpellbook, logger } = require('./index');

// Parse incantations (CLI args)
const argv = minimist(process.argv.slice(2));

const result = analyzeSpellbook({
  spell: argv.spell,
  cursedConfig: argv.cursedConfig,
  notes: argv.notes
});

logger.info(`Result: \n${JSON.stringify(result, null, 2)}`);
