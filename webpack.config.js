const path = require('path');

module.exports = {
    entry: './src/webpack_run.js',
    output: {
        filename: 'webpack_is_run.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.scss$/,
            use: [
            'style-loader',
            'css-loader',
            'scss-loader'
            ], 
        },
    ],
},    
};