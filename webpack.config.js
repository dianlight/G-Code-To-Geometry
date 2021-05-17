var path = require("path");
module.exports = {
    mode: 'production',
    entry: {
        gcodetogeometry: "./src/gcodetogeometry.js"
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
};