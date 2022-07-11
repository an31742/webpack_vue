const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin, web } = require("webpack")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index');


module.exports = {
  target:'web',//同时打开才会以一个编译效果
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    filename: "js/ build.js",
    path: path.resolve(__dirname, './dist')
  },
  devServer:{
    static:"./build",
    hot: true , //增加一个热更新
    // host:"0.0.0.0", //域名更换是为了在其他的地方也可以看到本地
    port:'7777',
    open:true,
    compress:true, //开启gzip压缩
    //做一个跨域代理
    proxy:{
      //  "api":'https://localhost:8888'
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": ""
        },
        secure: false,
        changeOrigin: true
      }
     }
  },
  resolve: {
    extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "js": path.resolve(__dirname, "./src/js")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      },

      {
        test: /\.m?js/,
        use: {
          loader: "babel-loader",
          // options: {
            // plugins: [
            //   "@babel/plugin-transfrom-block-socping",
            //   "@babel/plugin-transfrom-arrow-functions"
            // ],
            // presets: [
            //   ['@babel/preset-env']
            // ]

          // }
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }

    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack案例",
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ]



}