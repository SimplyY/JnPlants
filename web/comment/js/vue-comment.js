var server = require('./server.js');
var util = require('./util.js');
var config = require('./config.js');

var SendComment = new Vue({
    el: "#comment-area",
    data: getEmptyComment(),
    methods:{
        send: function() {
            if (config.userId === undefined) {
                window.android.webToast('请先登录');
                return;
            }

            var today = new Date();

            var newComment = {
                userId: config.userId,
                createdDate: util.getDateString(today),
                createdTime: util.getTimeString(today),
                content: SendComment.content,
            };

            server.addComment(CommentList, newComment, function () {
                server.getList(CommentList);
            });

            SendComment.$data = getEmptyComment();
        }
    }
});

var CommentList = new Vue({
    el: "#comment-list",
    data: {
        scene: {},
        plant: {},
        items: []
    }
});

function getEmptyComment(){
    return {
        userName: '',
        avatar: '',
        userId: '',
        createdDate: '',
        createdTime: '',
        content: '',
        _id: ''
    };
}

module.exports = {
    CommentList:　CommentList
};
