var ObjectId = require('mongodb').ObjectID;

exports.scenes = [{
    _id: new ObjectId().toString(),
    __v: 0,
    title: "test1",
    article: "test1",
    author: "余伟",
    month: "9",
    img: "https://www.google.com.sg/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    hasChecked: false,
    lovers: ["a", "b"],
    comments: ["a", "b"],
}];
