// load css
require('../css/scene.css');
require('../css/github-markdown.css');
require('../css/global.css');
require('../css/iconfont.css');

// load js
var controller = require('./controller');
var models = require('./models');

var plantModel = models.plantModel;
var userModel = models.userModel;


// 重要
// 必须要数据获取完，controller才能对 model 进行操作，所以必须
// 使 controller 在 model 初始化完成之后（getData）,再去初始化（setController）
// 这样会造成三层回调，所以我们用用计数器解决多层回调问题。
// count 代表相应 model 是否完成 getData
var count = {
    plant: false,
    user: false
};
plantModel.getData(count, countHandle);
userModel.getData(count, countHandle);

function countHandle(argument) {
    if (count.plant && count.user) {
        setController();
    }
}

function setController() {
    controller.back();

    controller.paddingplantInfo(plantModel.data);
    controller.setClickLoveEvent(plantModel.data, userModel.data, setLoveInServer);
    controller.setClickCommentEvent();
    controller.setClickMapEvent();
}

//  对服务器的 plant 表和 user 表的 love 数据进行操作
function setLoveInServer(loversAmount, isLove) {
    plantModel.setLoveNumberInServer(loversAmount, plantModel.plantId);

    if (isLove) {
        userModel.data.lovePlantsIds.push(plantModel.data._id);
    } else {
        var index = $.inArray(plantModel.data._id, userModel.data.lovePlantsIds);
        userModel.data.lovePlantsIds.splice(index, 1);
    }

    userModel.setLoveInServer(userModel.data.lovePlantsIds, userModel.data._id);
}
