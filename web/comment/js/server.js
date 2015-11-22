var config = require('./config.js');

module.exports = {
    'getList': getList,
    'addComment': addComment
};

function getList(commentList) {
    var sceneUrl = config.sceneApiUrl + config.sceneId;

    //  查询scene表
    $.get(sceneUrl, function (data) {
        var commentsIds = data.commentsIds;

        var idInQureyString = '?_id__in=';
        var commentUrl = config.commentApiUrl + idInQureyString + commentsIds.toString();
        // 查询comment表
        $.get(commentUrl, function (data) {
            commentList.items = data;
        });
    });
}

// 增加一条评论
function addComment(newComment) {
    $.post(config.commentApiUrl, newComment, function (comment) {
        // 将服务器端post 成功产生的_id记录
        newComment._id = comment._id;
    });
}
