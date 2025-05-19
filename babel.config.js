module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        root: ['.'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@context': './src/context',
          '@redux': './src/redux',
          '@global': './src/global',
          '@hooks': './src/hooks',
          '@types': './src/types',
          '@container': './src/containers',
          '@utils': './src/utils',
          '@assets': './assets',
          '@navigation': './src/navigation',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    'react-native-reanimated/plugin',
    '@babel/plugin-transform-export-namespace-from',
  ],
};
