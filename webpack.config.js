const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'js/[name].dist.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/dist/',
        watchContentBase: true,
    },
};
