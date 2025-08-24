import js from '@eslint/js';
import eslintHTML from '@html-eslint/eslint-plugin';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { '@html-eslint': eslintHTML, js },
    extends: ['js/recommended', prettierConfig],
    languageOptions: { globals: globals.browser },
    rules: {
      '@html-eslint/no-inline-styles': 1,
      '@html-eslint/indent': ['error', 2],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          printWidth: 100,
          tabWidth: 2,
          semi: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          endOfLine: 'lf',
        },
      ],
    },
  },
]);
