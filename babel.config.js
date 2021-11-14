module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@base': './src/base',
          '@data': './src/data',
          '@i18n': './src/i18n',
          '@constant': './src/constant',
          '@screens': './src/screen',
          '@redux': './src/redux',
          '@navigation': './src/navigation',
          '@theme': './src/theme',
          '@utils': './src/Utils',
        },
      },
    ],
  ],
};
