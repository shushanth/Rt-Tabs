(function(){
    'use strict';

    module.exports = {
      entry: './main.js',
      output: {
        path: './dist',
        filename: 'index.js'
      },
      devServer: {
        inline: true,
        port: 3000
      },
      module: {
        loaders: [
          {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }

        },
        {
          test:/\.scss$/,
          loaders:['style','css','sass']
        }
      ]
    }

  };

})();
