var mongoose = require('mongoose');

// 安卓端使用：简版的(为 美景listview 节省 http 的 body 大小，约100kb->5kb)
// 使用时注意，应该构造出 sceneList 数组对象，再对数组排序
var sceneListSchema = new mongoose.Schema({
    length: {
        type: Number,
        required: true
    },
    titles: {
        type: [String],
        required: true
    },
    imgs: {
        type: [String],
        required: true
    },
    months: {
        type: String,
        required: true
    }
});

// web 端使用，每改变一个 hasChecked 值，后端应该去更新 sceneList 数据。
var sceneSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },

    hasChecked: {
        type: Boolean,
        required: true
    },

    lovers: {
        type: [String]
    },
    comments: {
        type: [String],
    },
});


// Export the model schema.
module.exports = sceneSchema;
