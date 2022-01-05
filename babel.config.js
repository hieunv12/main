module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@component': './src/component',
          '@assets': './src/assets',
          '@util': './src/util',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@types': './src/types',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
