import globals from 'globals'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'

export default [
  // Базовые рекомендуемые правила
  pluginJs.configs.recommended,
  
  // Настройки для JavaScript файлов
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
      
      // Правила импортов
      'import/extensions': ['error', 'always'],
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      
      // Другие правила
      'no-underscore-dangle': ['error', { 
        allow: ['__filename', '__dirname'] 
      }],
      'no-console': 'off',
    },
  },
  
  // Игнорируемые файлы/папки
  {
    ignores: [
      'node_modules/',
      'dist/',
    ],
  },
]
