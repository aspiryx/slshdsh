// @ts-check

// import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
import vueTsEslintConfig from '@vue/eslint-config-typescript'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig({
    extends: ['recommendedTypeChecked'],
  }),
  stylistic.configs['recommended-flat'],
  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: tseslint.parser,
        projectService: {
          allowDefaultProject: ['eslint.config.js', 'postcss.config.js', 'tailwind.config.js'],
          defaultProject: 'tsconfig.json',
        },
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/no-explicit-any': 0,
      'id-length': 'off',
      'no-console': 'off',
      'no-ternary': 'off',
      'sort-keys': 'off',
      'sort-vars': 'off',
      'no-magic-numbers': 'off',
      'no-duplicate-imports': 'off',
      '@stylistic/brace-style': 'off',
    },
  },
)