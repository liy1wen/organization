const path = require('path')
module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
    publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: 'dist',
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "static",
    /* html的输出路径 */
    indexPath: 'index.html',
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: false,
    /* 是否使用浏览器内编译器的完构建版本 */
    runtimeCompiler: false,
    /* webpack-dev-server 相关配置 */
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 5000,
        https: false,
        hotOnly: true,
        /* 使用代理 */
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                target: 'http://192.168.1.4:8000/',
                /* 允许跨域 */
                changeOrigin: true,
                ws: false, //如果要代理 websockets，配置这个参数
                secure: false, // 如果是https接口，需要配置这个参数
                pathRewrite: {
                    "^api": ''
                }
            },
        },
    },
    /* Webpack相关配置 */
    configureWebpack: config => {
        // Object.assign(config, {
        //     // 开发生产共同配置
        //     resolve: {
        //         alias: {
        //             '@assets': path.resolve(__dirname, './src/assets'),
        //             '@components': path.resolve(__dirname, './src/components')
        //         } // 别名配置
        //     }
        // })
        Object.assign(config.resolve.alias, {
            '@': path.resolve(__dirname, './src'),
            '@c': path.resolve(__dirname, './src/components')
        })
    },
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
        extract: true,
        // 是否开启 CSS source map？
        sourceMap: false,
        // 为预处理器的 loader 传递自定义选项。比如传递给
        // Css-loader 时，使用 `{ Css: { ... } }`。
        loaderOptions: {
            scss: {
                prependData: `@import "./src/styles/css/index.scss";`
            }
        },
    },
    chainWebpack: config => {
        config.optimization.minimize(true);
        // config.optimization.splitChunks({
        //     chunks: 'all'
        // })
    }
}