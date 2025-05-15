import js from '@eslint/js';
import { defineConfig } from 'eslint/config'; // eslint-disable-line node/no-missing-import
import xo from 'eslint-config-xo';
import prettier from 'eslint-config-prettier';
import sonarjs from 'eslint-plugin-sonarjs';
import node from 'eslint-plugin-node';

export default defineConfig([
	{
		ignores: ['node_modules/**', 'build/**', '.git/**'],
	},
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		plugins: {
			js,
			sonarjs,
			node,
		},
		extends: ['js/recommended'],
		rules: {
			// Подключаем правила XO и Prettier
			...xo.rules,
			...prettier.rules,

			// Переопределяем отступ на табуляцию (важно ставить после xo)
			indent: ['error', 'tab'],

			// Строгие правила SonarJS
			'sonarjs/no-duplicate-string': ['error', { threshold: 3 }],
			'sonarjs/no-identical-functions': 'error',
			'sonarjs/no-all-duplicated-branches': 'error',
			'sonarjs/cognitive-complexity': ['error', 10],
			'sonarjs/prefer-single-boolean-return': 'error',
			'sonarjs/prefer-immediate-return': 'error',
			'sonarjs/no-collapsible-if': 'error',
			'sonarjs/no-nested-template-literals': 'error',
			'sonarjs/no-use-of-empty-return-value': 'error',
			'sonarjs/no-collection-size-mischeck': 'error',
			'sonarjs/no-redundant-boolean': 'error',
			'sonarjs/no-useless-catch': 'error',
			'sonarjs/no-inverted-boolean-check': 'warn',
			'sonarjs/no-unused-collection': 'warn',
			'sonarjs/no-gratuitous-expressions': 'warn',

			// Node.js best practices
			'node/no-missing-import': 'error',
			'node/no-extraneous-import': 'error',
			'node/no-unpublished-import': 'off',
			// unsuported in eslint@9.**
			//'node/no-unsupported-features/es-syntax': ['error', { version: '>=14.0.0', ignores: [] }],
		},
	},
]);
