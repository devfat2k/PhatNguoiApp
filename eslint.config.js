const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat();

module.exports = [
  js.configs.recommended,
  ...compat.config({
    extends: ['@react-native'],
    rules: {
      'no-unused-vars': 'warn',
      'react-native/no-unused-styles': 'off',
      'react-native/no-inline-styles': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'react/react-in-jsx-scope': 'off',
      'ft-flow/define-flow-type': 'off',
      'prettier/prettier': 'off',
      'comma-dangle': 'off',
      curly: 'off',
      eqeqeq: 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-unstable-nested-components': 'off',
      'react/self-closing-comp': 'off',
      'react-hooks/rules-of-hooks': 'error',
    },
  }),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  },
];
