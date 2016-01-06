// css
require("../css/reset.css");
require("../css/comment.css");

// js
var vueComment = require("./vue-comment.js");
var server = require('./server.js');

// 获取commentlist
server.getList(vueComment.CommentList);
