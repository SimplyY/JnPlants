fis.match('bundle.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

fis.match('::package', {
    postpackager: fis.plugin('loader', {
        allInOne: true
    })
});

fis.match('bundle.js', {
    packTo: '/scene/js/aio.js'
});
