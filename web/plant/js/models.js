var config = require('./config');
var util = require('./util.js');

var URLparams = util.getQureyParams(window.location.href);

var plantModel = {
    plantId: URLparams.plantId,
    data:{},

    'getData':function getData(count, countHandle) {
        var plantUrl = config.plantApiUrl + plantModel.plantId;

        $.get(plantUrl, function(data) {
            plantModel.data = data;
            count.plant = true;
            countHandle();
        });
    },

    // 更新 plant 表
    'setLoveNumberInServer': function setLoveNumberInServer(loversAmount, plantId) {
        var changeInfo = {
            'loversAmount': loversAmount
        };

        util.restfulPutRequest(config.plantApiUrl, plantId, changeInfo);
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

    'setLoveInServer': function setLoveServer(loveplantsIds, userId) {
        var changeInfo = {
            'loveplantsIds': loveplantsIds
        };

        util.restfulPutRequest(config.userApiUrl, userId, changeInfo);
    }
};

exports.plantModel = plantModel;
exports.userModel = userModel;
