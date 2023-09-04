/** @type {import('prettier').Options} */
module.exports = {
  useTabs: false,
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',

  overrides: [
    {
      files: ['*.ts', '*.js'],
      parser: 'typescript',
    },
    {
      files: ['*.json'],
      parser: 'json',
    },
  ],
};
