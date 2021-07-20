const path = require("path");
const { ChakraLoaderPlugin } = require("chakra-loader");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const port = process.env.port || process.env.npm_config_port || 9527;

module.exports = {
  publicPath: "/",
  runtimeCompiler: true,
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "^/sessions.json": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/sessions.json": "/sessions.json" },
        logLevel: "debug",
      },
      "^/spiview.json": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/spiview.json": "/spiview.json" },
        logLevel: "debug",
      },
      "^/connections.json": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/connections.json": "/connections.json" },
        logLevel: "debug",
      },
      "^/spigraph.json": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/spigraph.json": "/spigraph.json" },
        logLevel: "debug",
      },
      "^/statusbarvalue": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/statusbarvalue": "/statusbarvalue" },
        logLevel: "debug",
      },
      "^/fields": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/fields": "/fields" },
        logLevel: "debug",
      },

      "^/upload": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/upload": "/upload" },
        logLevel: "debug",
      },
      "^/topProtocol": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/topProtocol": "/topProtocol" },
        logLevel: "debug",
      },
      "^/countSessions": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/countSessions": "/countSessions" },
        logLevel: "debug",
      },
      "^/interface": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/interface": "/interface" },
        logLevel: "debug",
      },
      "^/getfile": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        // pathRewrite: {'^/dev-api': ''},
        logLevel: "debug",
      },
      // "^/fields": {
      //   target: "http://125.212.203.147:8005",
      //   changeOrigin: true,
      //   secure: false,
      //   // pathRewrite: {'^/dev-api': ''},
      //   logLevel: "debug",
      // },
      "^/fago-labs-vm-2": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        // pathRewrite: {'^/dev-api': ''},
        logLevel: "debug",
      },
      "^/decodings": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        // pathRewrite: {'^/dev-api': ''},
        logLevel: "debug",
      },
      "^/font-awesome": {
        target: "http://125.212.203.147:8005",
        changeOrigin: true,
        secure: false,
        // pathRewrite: {'^/dev-api': ''},
        logLevel: "debug",
      },
      "^/api/v1/*": {
        target: "http://125.212.203.147:8005",
        changeOrigin: false,
        secure: false,
        // pathRewrite: {'^/dev-api': ''},
        logLevel: "debug",
      },
      "^/api_v1/*": {
        target: "http://125.212.203.147:8005",
        changeOrigin: false,
        secure: false,
        // pathRewrite: {'^/dev-api': ''},
        logLevel: "debug",
      },
    },
    // before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    plugins: [new ChakraLoaderPlugin()],
  },
};
