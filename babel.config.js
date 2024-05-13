module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@/entities": "./src/entities",
          "@/widgets": "./src/widgets",
          "@/features": "./src/features",
          "@/shared": "./src/shared",
          "@/screens": "./src/screens",
          "@/app": "./src/app",

          "@/store": "./src/store",

          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
