var config = require('./config.js');
var util = require('./util.js');
if (config.sceneId !== undefined) {
    var sceneUrl = config.sceneApiUrl + config.sceneId;
} else if (config.plantId !== undefined) {
    var plantUrl = config.plantApiUrl + config.plantId;
}


module.exports = {
    'getList': getList,
    'addComment': addComment
};

function getList(commentList) {
    // 查询scene表
    var qureyUrl;
    if (config.sceneId !== undefined) {
        qureyUrl = sceneUrl;
    } else if (config.plantId !== undefined) {
        qureyUrl = plantUrl;
    }

    $.get(qureyUrl, function(data) {
        if (data.commentsIds.length === 0) {
            if (config.sceneId !== undefined) {
                commentList.scene = data;
            } else if (config.plantId !== undefined) {
                commentList.plant = data;
            }
            return;
        }
        if (config.sceneId !== undefined) {
            commentList.scene = data;
        } else if (config.plantId !== undefined) {
            commentList.plant = data;
        }

        var commentsIds = data.commentsIds;
        var idInQureyString = '?_id__in=';
        var commentUrl = config.commentApiUrl + idInQureyString + commentsIds.toString();
        // 查询comment表
        $.get(commentUrl, function(data) {
            var commentsData = data;

            var usersIds = [];
            for (var i = 0; i < commentsData.length; i++) {
                usersIds.push(commentsData[i].userId);
            }

            getUsersData(usersIds, function (usersData) {
                for (var i = 0; i < commentsData.length; i++) {
                    for (var j = 0; j < usersData.length; j++) {
                        if (commentsData[i].userId === usersData[j]._id) {
                            commentsData[i].userName = usersData[j].name;
                            commentsData[i].avatar = usersData[j].imgUrl;
                        }
                    }
                }

                commentsData.sort(mySort());

                var comentListLength = commentList.items.length;
                for (i = 0; i < comentListLength; i++) {
                    commentList.items.pop();
                }
                for (i = 0; i < commentsData.length; i++) {
                    commentList.items.push(commentsData[i]);
                }
            });
        });
    });
}

// 增加一条评论
function addComment(commentList, newComment, callback) {
    $.post(config.commentApiUrl, newComment, function(comment) {
        var newCommentId = comment._id;
        newComment._id = newCommentId;
        if (config.sceneId !== undefined) {
            var scene = commentList.scene;
            scene.commentsIds.push(newCommentId);
            util.restfulPutRequest(config.sceneApiUrl, scene._id, scene, callback);
        } else if (config.plantId !== undefined) {
            var plant = commentList.plant;
            plant.commentsIds.push(newCommentId);
            util.restfulPutRequest(config.plantApiUrl, plant._id, plant, callback);
        }
    });
}

// 根据usersIds查询user信息
function getUsersData(usersIds, callback) {
    var usersData;

    var idInQureyString = '?_id__in=';
    var userUrl = config.userApiUrl + idInQureyString + usersIds.toString();
    $.get(userUrl, function (data) {
        usersData = data;
        callback(usersData);
    });
}

function mySort() {
    return function(obj1, obj2){
        var a, b;
        if (typeof obj1 === "object" && typeof obj2 === "object" && obj1 && obj2) {
            a = Date.parse(obj1.createdDate + ' ' + obj1.createdTime);
            b = Date.parse(obj2.createdDate + ' ' + obj2.createdTime);
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
        }
    };
}
