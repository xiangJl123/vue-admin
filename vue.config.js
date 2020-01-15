const path = require('path')
module.exports = {

    // 基本路径
    publicPath: process.env.NODE_ENV === "production" ? "" : "/",
   
    // 输出文件目录
    // outputDir: process.env.NODE_ENV === "production" ? "dist" : "/",

    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
    // lintOnSave: process.env.NODE_ENV !== "production",
    lintOnSave:false,

    // chainWebpack
    chainWebpack:(config)=>{

    },
    configureWebpack: (config) => {
        config.resolve={   //  配置解析别名
            extensions:['.js','.json','.vue'],  //自动添加文件后缀名
            alias:{
                "@":path.resolve(__dirname,'./src')
            }

        }
        // if (process.env.NODE_ENV === "production") {
        //   // 为生产环境修改配置...
           
        // } else {
        //   // 为开发环境修改配置...
        // }
    },


  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  // 默认值'dist'
  // outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  // 放置生成的静态资源 (js、css、img、fonts) 的目录(相对于outputDir目录)。
  // 默认值''
  assetsDir: "assets",
  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
  filenameHashing: false,
  

  //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,

  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,

  

  css: {
    loaderOptions: {
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `data` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      // 主要用于公共样式的加载
      scss: {
        prependData: `@import "~@/style/main.scss";`
      }
    }
  },
  // 所有 webpack-dev-server 的选项都支持。
  devServer: {
    host: "localhost",
    port: 8081, // 端口号
    https: false,   //是否使用https协议
    hotOnly: false,
    open: true, //配置自动启动浏览器

    // 配置多个代理  解决跨域问题
    proxy: {
      "/szhiqu": {
        target: "http://192.168.0.82", // 本地模拟数据服务器
        changeOrigin: true,
        pathRewrite: {
          "^/szhiqu": "" // 去掉接口地址中的devapi字符串
        }
      }
    }
  }
};
