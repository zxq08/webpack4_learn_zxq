const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        // publicPath: __dirname + '/dist/', // js引用的路径或CDN地址
        publicPath: './', // js引用的路径或CDN地址
        path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
        filename: '[name].bundle.js', // 代码打包后的文件名
        chunkFilename: '[name].js' // 代码切割后的文件名
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                lodash: {
                    name: 'lodash',
                    test: /[\\/]node_modules[\\/]lodash[\\/]/,
                    priority: 5  // 优先级要大于 vendors 不然会被打包进 vendors
                },commons: {
                    name: 'commons',
                    minSize: 0, //表示在压缩前的最小模块大小,默认值是 30kb
                    minChunks: 2, // 最小公用次数
                    priority: 5, // 优先级
                    reuseExistingChunk: true // 公共模块必开启
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(), // 清除历史dist\
        new HtmlWebpackPlugin({
            title: '自动生成的html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true
            },
            filename: 'index.html',
            // template: 'index.html'
        })
    ]
}