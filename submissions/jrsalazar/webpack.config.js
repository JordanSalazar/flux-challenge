module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /.*node_modules.*/,
            query: {
                presets: ['es2015', 'react']
            }
        }
        ]
    },
    externals: {
        // don't bundle the 'react' npm package with our bundle.js
        // but get it from a global 'React' variable
        'React': 'react',
    },

};
