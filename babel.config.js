// process.env.TAMAGUI_TARGET = 'native';

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     // optional, only if you ever use process.env
//     'transform-inline-environment-variables',
//     // NOTE: this is optional, you don't *need* the compiler
//     [
//       '@tamagui/babel-plugin',
//       {
//         components: ['tamagui'],
//         config: './tamagui.config.ts',
//         logTimings: true,
//       },
//     ],
//     // NOTE: this is only necessary if you are using reanimated for animations
//     'react-native-reanimated/plugin',
//   ],
// };
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['module:metro-react-native-babel-preset']],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          config: './tamagui.config.ts',
          components: ['tamagui'],
        },
      ],
      [
        'transform-inline-environment-variables',
        {
          include: ['EXPO_ROUTER_APP_ROOT'],
        },
      ],
      // require.resolve('expo-router/babel'),
      '@babel/plugin-transform-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
  };
};
