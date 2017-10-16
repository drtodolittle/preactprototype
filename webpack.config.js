var path = require('path');

var SRC_DIR = path.resolve(__dirname,"src");
var DIST_DIR = path.resolve(__dirname,"dist");

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var config = {
    entry: SRC_DIR + "/app/index.js",
    output:{
        path : DIST_DIR,
        filename : "app.bundled.min.js",
        publicPath: "/"
    },
    module:{
        loaders:[
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader:"babel-loader",
                query:{
                    presets:["es2015","stage-2"]
                }
            }
        ]
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        }),

        new UglifyJSPlugin({
            test: /\.js?/,
            include: SRC_DIR,
        })

    ]
}

module.exports = config;
