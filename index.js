const lodash = require('lodash');
const marked = require('marked');
const winston = require('winston');

// Set up logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console()
  ]
});

/**
 * Analyzes a spellbook with given options
 * @param {Object} options Options for spellbook analysis
 * @param {string} options.spell The spell to cast
 * @param {Object|string} options.cursedConfig The configuration to merge into the Grimoire
 * @param {string} options.notes Additional ancient text notes
 * @returns {Object} The analysis result
 */
function analyzeSpellbook(options = {}) {
  const { spell, cursedConfig, notes } = options;
  
  // Our ancient magical state
  const ancientGrimoire = {
    activeSpells: ['light', 'shield'],
    mana: 100
  };
  
  logger.info("🌟 Welcome to the Spellbook Analyzer 🌟");
  
  if (spell) {
    logger.info(`Casting spell: ${spell}...`);
  }
  
  // ⚠️ VULNERABLE: lodash.merge prototype pollution
  // Imagine this configuration comes from a cursed scroll (user input)
  const configToMerge = typeof cursedConfig === 'string' ? JSON.parse(cursedConfig) : (cursedConfig || {});
  logger.info("Merging cursed scroll configuration into the ancient Grimoire...");
  lodash.merge(ancientGrimoire, configToMerge);
  
  logger.info(`Current Grimoire State: ${JSON.stringify(ancientGrimoire)}`);
  
  // ⚠️ VULNERABLE: marked ReDoS
  // Rendering some markdown from an ancient scroll
  const ancientText = `
# The Scroll of Power
Beware the dark arts.
${notes || ''}
  `;
  
  logger.info("Deciphering the ancient text...");
  const html = marked(ancientText);
  logger.info("✨ Analysis Complete ✨");
  
  return {
    grimoire: ancientGrimoire,
    decipheredHtml: html
  };
}

/**
 * Enchants a markdown document by prefixing its title and converting to HTML
 * @param {string} md_doc The markdown document to enchant
 * @returns {string} The enchanted HTML
 */
function enchant_document(md_doc) {
  // Prefix the first # header with "Enchanted: "
  const enchantedMd = md_doc.replace(/^(#\s*)(.*)$/m, '$1Enchanted: $2');
  
  // Parse markdown to HTML without sanitization
  return marked(enchantedMd, { sanitize: false });
}

module.exports = {
  analyzeSpellbook,
  enchant_document,
  logger
};
