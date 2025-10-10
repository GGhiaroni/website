import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        browser: true,
        node: true,
      },
    },
    extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
    rules: {
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': 'warn',
    },
  },
])
