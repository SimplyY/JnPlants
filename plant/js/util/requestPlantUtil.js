var plantRequestUtil = {
    plantApiUrl: 'http://121.40.224.83:8080/JnPlant/api/plant',
    getList: function (PlantList) {
        jQuery.get(plantRequestUtil.plantApiUrl, function (data) {
            console.log("plantList");
            console.log(data);
            PlantList.items = data;
        }).fail(function() {
            showTipInfo("网络连接失败");
            // must do it
            console.log("get error");
        });
    },

    // 增加一个植物
    // https://github.com/SimplyY/JnPlant-node/blob/master/models%2Fplant.js
    addPlant: function (newPlant) {
        jQuery.post(plantRequestUtil.plantApiUrl, newPlant, function (plant) {
            // in this data has got
            console.log("post success");
            console.log(plant);
            // 将服务器端post 成功产生的_id记录
            newPlant._id = plant._id;
        }).fail(function() {
            showTipInfo("添加失败");
            // must do it
            console.log("post error");
        });
    },

    // 修改一个植物
    changePlant: function (plantId, changeInfo) {
        jQuery.ajax({
            url: plantRequestUtil.plantApiUrl + '/' + plantId,
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

    // 删除一个植物
    deletePlant: function (plantId) {
        jQuery.ajax({
            url: plantRequestUtil.plantApiUrl + '/' + plantId,
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
