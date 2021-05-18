var path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: {
        gcodetogeometry: "./src/gcodetogeometry.ts"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        library: {
            name: "gcodetogeometry",
            type: "umd"
        }
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'test'),
        compress: true,
        port: 9000,
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            }
        ]
    },
    plugins: [
        new NodePolyfillPlugin(),
    ]
};