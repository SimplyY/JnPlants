var sceneRequestUtil = {
    sceneApiUrl: 'http://121.40.224.83:8080/JnPlant/api/scene',
    getList: function (SceneList) {
        jQuery.get(sceneRequestUtil.sceneApiUrl, function (data) {
            console.log("sceneList");
            console.log(data);
            SceneList.items = data;
        }).fail(function() {
            showTipInfo("网络连接失败");
            // must do it
            console.log("get error");
        });
    },

    // 增加一个美景
    // https://github.com/SimplyY/JnPlant-node/blob/master/models%2Fscene.js
    addScene: function (newScene) {
        jQuery.post(sceneRequestUtil.sceneApiUrl, newScene, function (scene) {
            // in this data has got
            console.log("post success");
            console.log(scene);
            // 将服务器端post 成功产生的_id记录
            newScene._id = scene._id;
        }).fail(function() {
            showTipInfo("添加失败");
            // must do it
            console.log("post error");
        });
    },

    // 修改一个美景
    changeScene: function (sceneId, changeInfo) {
        jQuery.ajax({
            url: sceneRequestUtil.sceneApiUrl + '/' + sceneId,
            type: 'PUT',
            contentType: 'application/json',
            dataType: "json",
            data: JSON.stringify(changeInfo),
            success: function (result) {
                console.log(result);
                console.log("put success");
            },
            error: function () {
                showTipInfo("修改失败");
                // must do it
                console.log("change error");
            }
        });
    },

    // 删除一个美景
    deleteScene: function (sceneId) {
        jQuery.ajax({
            url: sceneRequestUtil.sceneApiUrl + '/' + sceneId,
            type: 'delete',
            success: function(result) {
                console.log("del success");
                // Do something with the result
            },
            error: function () {
                showTipInfo("删除失败");
                // must do it
                console.log("del error");
            }
        });
    }

};
