var util = require('./util');

var URLParams = util.getQureyParams(window.location.href);
var userApiUrl = 'http://121.40.224.83:8080/JnPlant/api/user/';
getUserIdByOpenId(URLParams.openId);

module.exports = {
    commentApiUrl: 'http://121.40.224.83:8080/JnPlant/api/comment/',
    sceneApiUrl: 'http://121.40.224.83:8080/JnPlant/api/scene/',
    userApiUrl: userApiUrl,
    plantApiUrl: 'http://121.40.224.83:8080/JnPlant/api/plant/',

    sceneId: URLParams.sceneId,
    openId: URLParams.openId,
    plantId: URLParams.plantId
};


function getUserIdByOpenId(openId) {
    var qureyUrl = '?openId=';
    $.get(userApiUrl + qureyUrl + openId, function (data) {
        module.exports.userId = data[0]._id;
    });
}
