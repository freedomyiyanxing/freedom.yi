module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  parserOptions: {},
  extends: [
    'airbnb',
  ],
  rules: {
    'no-console': 0,
    'react/jsx-filename-extension': [ // 允许在['.js', '.jsx', '.tsx'] 文件中 写 jsx 代码
      1,
      {
        'extensions': ['.js', '.jsx', '.tsx'],
      }
    ],
    'import/no-unresolved': 0, // 允许 import 时 不带文件后缀名
    'import/extensions': 0,
  },
  settings: {
    'import/extensions': [
      '.ts',
      '.tsx'
    ]
  },
  globals: {
    document: false
  }
};
