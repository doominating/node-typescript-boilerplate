module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@core': './src/core',
        '@modules': './src/modules',
        '@routes': './src/routes',
        '@services': './src/services',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@views': './src/views',
        '@tests': './src/tests'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}