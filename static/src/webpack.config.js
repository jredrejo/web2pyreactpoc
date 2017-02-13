
var path = require('path');

module.exports = {
    entry: {
        pageSimple: './app/testindex.jsx',
        pageAdvanced: './app/advanced.jsx'
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',


    },

    module: {

        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],

                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015"]
                },
                exclude: [
                    path.resolve(__dirname, "app/components"), path.resolve(__dirname, "node_modules")
                ]
            },

        ],

    },

    resolve: {

        modules: [
            "node_modules",
            path.resolve(__dirname, "node_modules")
        ],

        extensions: [".js", ".json", ".jsx", ".css"],


    },


};
