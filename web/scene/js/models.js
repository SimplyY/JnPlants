var config = require('./config');
var util = require('./util.js');

var URLparams = getQureyParams(window.location.href);

var sceneModel = {
    sceneId: URLparams.sceneId,
    data:{},

    'getData':function getData(count, countHandle) {
        var sceneUrl = config.sceneApiUrl + sceneModel.sceneId;

        $.get(sceneUrl, function(data) {
            sceneModel.data = data;
            count.scene = true;
            countHandle();
        });
    },

    // 更新 scene 表
    'setLoveNumberInServer': function setLoveNumberInServer(loversAmount, sceneId) {
        var changeInfo = {
            'loversAmount': loversAmount
        };

        util.restfulPutRequest(config.sceneApiUrl, sceneId, changeInfo);
    }
};

var userModel = {
    userOpenId: URLparams.openId,
    data: {},

    'getData': function getData(count, countHandle) {
        userUrl = config.userApiUrl + '?openId=' + userModel.userOpenId;
        $.get(userUrl, function(data) {
            userModel.data = data[0];
            count.user = true;
            countHandle();
        });
    },

    'setLoveInServer': function setLoveServer(loveScenesIds, userId) {
        var changeInfo = {
            'loveScenesIds': loveScenesIds
        };

        util.restfulPutRequest(config.userApiUrl, userId, changeInfo);
    }
};

exports.sceneModel = sceneModel;
exports.userModel = userModel;


function getQureyParams(url) {
    var searchParams = {};

    var qurey = url.split('?');
    // scene_id=1&user_id=2
    qurey = qurey[qurey.length -1];

    var params = qurey.split('&');
    for (var i = 0; i < params.length; i++) {
        // scene_id=1
        var keyValue = params[i].split('=');
        searchParams[keyValue[0]] = keyValue[1];
    }

    return searchParams;
}
