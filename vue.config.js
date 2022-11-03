const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const Timestamp = new Date().getTime();
module.exports = {

    publicPath: (process.env.NODE_ENV === 'production') ? '/' : (process.env.NODE_ENV === 'test' ? '/' : '/'),
    productionSourceMap: false,
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@/assets/common.scss";
               `
            }
        }
    },
    configureWebpack: () => {
        return {
            plugins: [
                AutoImport({
                    resolvers: [ElementPlusResolver()],
                }),
                Components({
                    resolvers: [ElementPlusResolver()],
                }),
            ],
            output: { // 输出重构  打包编译后的 文件名称  【模块名称.环境.时间戳】
                filename: `[name].${process.env.VUE_APP_ENVIRONMENT}.${Timestamp}.js`,
                chunkFilename: `[name].${process.env.VUE_APP_ENVIRONMENT}.${Timestamp}.js`
            }
        }
    },
    chainWebpack: config => {
        // 关闭预先加载模块
        config.plugins.delete('prefetch');
        config
            .entry('index')
            .add('babel-polyfill')
    }
};
