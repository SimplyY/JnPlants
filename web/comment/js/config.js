var util = require('./util');

var URLParams = util.getQureyParams(window.location.href);
module.exports = {
    commentApiUrl: 'http://121.40.224.83:8080/JnPlant/api/comment/',
    sceneApiUrl: 'http://121.40.224.83:8080/JnPlant/api/scene/',

    sceneId: URLParams.sceneId,
    openId: URLParams.openId
};
