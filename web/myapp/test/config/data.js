var ObjectId = require('mongodb').ObjectID;

exports.scenes = [{
    _id: new ObjectId(),
    __v: 0,
    title: "test1",
    article: "test1",
    comment: ["a", "b"],
}];
