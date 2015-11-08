// load css
require('../css/scene.css');
require('../css/comment.css');
require('../css/github-markdown.css');
require('../css/global.css');
require('../css/iconfont.css');

// load js
var controller = require('./controller');
var models = require('./models.js');
var config = require('./config');

var sceneModel = models.sceneModel;
var userModel = models.userModel;


// 重要
// 必须要数据获取完，controller才能对 model 进行操作，所以必须
// 使 controller 在 model 初始化完成之后（getData）,再去初始化（setController）
// 这样会造成三层回调，所以我们用用计数器解决多层回调问题。
// count 代表相应 model 是否完成 getData
var count = {
    scene: false,
    user: false
};
sceneModel.getData(count, countHandle);
userModel.getData(count, countHandle);

function countHandle(argument) {
    if (count.scene && count.user) {
        setController();
    }
}

function setController() {
    controller.paddingSceneInfo(sceneModel.data);
    controller.setClickLoveEvent(sceneModel.data, userModel.data, setLoveInServer);
}

//  对服务器的 scene 表和 user 表的 love 数据进行操作
function setLoveInServer(loversAmount, isLove) {
    sceneModel.setLoveNumberInServer(loversAmount, sceneModel.sceneId);

    if (isLove) {
        userModel.data.loveScenesIds.push(sceneModel.data._id);
    } else {
        var index = $.inArray(sceneModel.data._id, userModel.data.loveScenesIds);
        userModel.data.loveScenesIds.splice(index, 1);
    }

    userModel.setLoveInServer(userModel.data.loveScenesIds, userModel.data._id);
}
