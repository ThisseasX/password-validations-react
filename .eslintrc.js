module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-shadow': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/label-has-associated-control': [2, { assert: 'either' }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
