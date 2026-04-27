
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: process.env.NODE_ENV === "production"
      ? "https://mfe-dashboard-lokum-79a2da.netlify.app/"
      : "http://localhost:3001/",
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe_dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/DashboardApp",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
