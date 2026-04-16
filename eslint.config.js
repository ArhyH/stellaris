const boundaries = require('eslint-plugin-boundaries');
const importPlugin = require('eslint-plugin-import');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

const FSD_LAYERS = [
  'app',
  'pages',
  'widgets',
  'features',
  'entities',
  'shared',
];

module.exports = [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      boundaries,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      'boundaries/elemets': [
        { type: 'app', pattern: 'src/app/**' },
        { type: 'pages', pattern: 'src/pages/**' },
        { type: 'widgets', pattern: 'src/widgets/**' },
        { type: 'features', pattern: 'src/features/**' },
        { type: 'entities', pattern: 'src/entities/**' },
        { type: 'shared', pattern: 'src/shared/**' },
      ],
      'import/resolver': {
        typescript: { aalwaysTryTypes: true },
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'warn',

      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { from: 'app', allow: FSD_LAYERS },
            {
              from: 'pages',
              allow: ['widgets', 'features', 'entities', 'shared'],
            },
            {
              from: 'widgets',
              allow: ['features', 'entities', 'shared'],
            },
            {
              from: 'features',
              allow: ['entities', 'shared'],
            },
            {
              from: 'entities',
              allow: ['shared'],
            },
            {
              from: 'shared',
              allow: [],
            },
          ],
        },
      ],
    },
  },
];
