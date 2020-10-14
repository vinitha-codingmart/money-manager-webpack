const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output:{
     path: path.join(__dirname, '/dist'),
     filename:'index_bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,  
                use: {
                    loader: `babel-loader`
                }
            },{
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
                include: path.join(__dirname, 'src'),
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};