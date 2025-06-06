import globals from 'globals'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'

export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@stylistic': stylistic,
      'import': importPlugin,
    },
    rules: {
      // Стилистические правила
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-unary-ops': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],

      // Правила импортов
      'import/extensions': ['error', 'always'],
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',

      // Другие правила
      'no-underscore-dangle': ['error', {
        allow: ['__filename', '__dirname'],
      }],
      'no-console': 'off',
    },
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
    ],
  },
]
