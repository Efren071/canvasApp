const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    mode: 'development',
    entry: './src/index.ts',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.spec.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist',
    }
}
