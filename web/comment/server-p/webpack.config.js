module.exports = {
    //页面入口文件配置
    entry: '../js/entry.js',
    //入口文件输出配置
    output: {
       path: '/Users/yuwei/GitHub/JnPlants-node/public/comment',
       filename: "bundle.js"
   },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    },
};
