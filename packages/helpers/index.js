module.exports = {
  plugins: ['unused-imports', 'import-helpers'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', ['/^@react/', '/^@/'], 'module', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
}
