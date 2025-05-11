import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{ files: ['app/**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
	{ files: ['app/**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.browser } },
	{
		rules: {
			'no-unused-vars': 'error',
			'no-undef': 'error',
		},
	},
]);
