/** @type {import('eslint').ESLint.ConfigData} */

module.exports = {
  extends: [
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.js'],
      plugins: ['eslint-plugin-import', 'simple-import-sort'],
      rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'no-cond-assign': 'error',
        'no-console': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 0,
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': ['error', 'functions'],
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-negated-in-lhs': 'error',
        'no-obj-calls': 'error',
        'no-regex-spaces': 'error',
        'no-reserved-keys': 0,
        'no-sparse-arrays': 'error',
        'no-unreachable': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 0,
        'valid-typeof': 'error',
        'block-scoped-var': 0,
        complexity: [0, 11],
        'consistent-return': 'error',
        curly: ['error', 'all'],
        'default-case': 0,
        'dot-notation': [
          'error',
          {
            allowKeywords: true,
          },
        ],
        eqeqeq: 'error',
        'guard-for-in': 0,
        'no-alert': 'error',
        'no-caller': 'error',
        'no-div-regex': 0,
        'no-else-return': 0,
        'no-eq-null': 0,
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 0,
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-new': 0,
        'no-octal-escape': 'error',
        'no-octal': 'error',
        'no-param-reassign': 0,
        'no-process-env': 0,
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-compare': 0,
        'no-sequences': 'error',
        'no-throw-literal': 0,
        'no-unused-expressions': 'error',
        'no-void': 0,
        'no-warning-comments': [
          0,
          {
            terms: ['todo', 'fixme'],
            location: 'start',
          },
        ],
        'no-with': 'error',
        radix: 0,
        'vars-on-top': 0,
        'wrap-iife': 0,
        yoda: ['error', 'never'],
        strict: 'error',
        'no-catch-shadow': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-shadow-restricted-names': 'error',
        'no-shadow': 'error',
        'no-undef-init': 'error',
        'no-undef': 'error',
        'no-undefined': 0,
        'no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
          },
        ],
        'no-use-before-define': 'error',
        'handle-callback-err': 0,
        'no-mixed-requires': [0, false],
        'no-new-require': 0,
        'no-path-concat': 0,
        'no-process-exit': 'error',
        'no-restricted-modules': 0,
        'no-sync': 0,
        'brace-style': ['error', '1tbs'],
        camelcase: 'error',
        'comma-spacing': 'error',
        'comma-style': 'error',
        'consistent-this': [0, 'that'],
        'eol-last': 'error',
        'func-names': 0,
        'func-style': [0, 'declaration'],
        indent: 0,
        'key-spacing': [
          'error',
          {
            beforeColon: false,
            afterColon: true,
          },
        ],
        'keyword-spacing': 'error',
        'linebreak-style': [0, 'unix'],
        'max-nested-callbacks': [0, 2],
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-after-var': 0,
        'no-array-constructor': 'error',
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 0,
        'no-mixed-spaces-and-tabs': ['error', false],
        'no-multiple-empty-lines': [
          0,
          {
            max: 1,
          },
        ],
        'no-nested-ternary': 0,
        'no-new-object': 'error',
        'no-spaced-func': 'error',
        'no-ternary': 0,
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 0,
        'one-var': 0,
        'operator-assignment': [0, 'always'],
        'operator-linebreak': 0,
        'padded-blocks': 0,
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single'],
        'semi-spacing': [
          'error',
          {
            before: false,
            after: true,
          },
        ],
        semi: 'error',
        'sort-vars': 0,
        'space-after-keywords': [0, 'always'],
        'space-before-blocks': [0, 'always'],
        'space-before-function-paren': [0, 'always'],
        'space-in-brackets': [0, 'never'],
        'space-in-parens': [0, 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': [
          'error',
          {
            words: true,
            nonwords: false,
          },
        ],
        'spaced-comment': ['error', 'always', { exceptions: ['-'] }],
        'wrap-regex': 0,
        'generator-star-spacing': 0,
        'no-var': 'error',
        'object-shorthand': 0,
        'max-depth': [0, 4],
        'max-len': [0, 80, 4],
        'max-params': [0, 3],
        'max-statements': [0, 10],
        'no-bitwise': 0,
        'no-plusplus': 0,
        'import/no-duplicates': 'error',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react', '^@?\\w'],
              ['^\\u0000'],
              ['^@/types'],
              ['^@@/'],
              ['^'],
              ['^\\.'],
            ],
          },
        ],
      },
    },
    {
      files: ['*.json'],
      parser: 'eslint-plugin-json-es',
      extends: 'plugin:eslint-plugin-json-es/recommended',
      rules: {
        'comma-dangle': ['error', 'never'],
        indent: ['error', 2],
      },
    },
  ],
};
