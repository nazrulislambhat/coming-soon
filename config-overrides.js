const path = require('path');

module.exports = function override(config) {
  config.module.rules.push({
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    include: path.resolve(__dirname, 'src/fonts'),
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
    ],
  });

  return config;
};
