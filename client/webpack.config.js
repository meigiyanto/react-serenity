const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./src/index.js"],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|pdf)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
	devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
  plugins: [
  	new webpack.HotModulePlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
