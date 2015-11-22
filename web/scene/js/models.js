var config = require('./config');
var util = require('./util.js');

var URLparams = util.getQureyParams(window.location.href);

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
