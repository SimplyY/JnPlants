(function(plantPreview, jQuery) {
    var today = new Date();

    //  点击添加按钮新增投稿
    jQuery('.add').click(function() {
        Plant.setIsNew(true);
        showTipInfo("新增投稿");
        setPlantTopImg(Plant.imgUrl);
        plantPreview.changePlantPreview(Plant);
    });

    // 上传图片
    uploadImg('upload-top-img', 'upload-image', setPlantTopImg, 0.1, 500);
    uploadImg('upload-article-img', 'upload-image', insertImgInArticle, 0.08, 400);

    function insertImgInArticle(IMG_URL) {
        // ![](/images/2015/10/a)
        var imgMd = String.format('![upload_img]({0})', IMG_URL);
        var textInput = jQuery('#article-input');
        var insertMd = textInput.val() + '\n' + imgMd;

        Plant.article = insertMd;
        jQuery('#preview-article').html(markdown.toHTML(insertMd));
    }

    function setPlantTopImg(IMG_URL) {
        jQuery('.top-img').attr('src', IMG_URL);
        Plant.imgUrl = IMG_URL;
    }

    //  plant schema
    function getEmptyPlant() {
        return {
            name: '',
            nickName: '',
            article: '',
            authorId: 123,
            authorName: 'test',
            imgUrl: '',
            hasChecked: false,
            _id: ''
        };
    }

    window.Plant = new Vue({
        el: '#article',
        data: getEmptyPlant(),
        methods: {
            // 投稿
            contribute: function() {
                if (Plant.dataIllegal()) {
                    showTipInfo("请将信息填写完整");
                    return;
                }

                var plant = {};
                // 增加
                if (Plant.getIsNew()) {
                    //if addNewPlant();
                    PlantList.copyPlant(Plant, plant);
                    PlantList.addPlantInList(plant);
                    showTipInfo("*^_^* 投稿成功");
                } else {
                    // change
                    plant = PlantList.findPlantById(Plant._id);
                    PlantList.copyPlant(Plant, plant);
                    plantRequestUtil.changePlant(plant._id, plant);
                    showTipInfo("*^_^* 修改成功");
                }
                Plant.$data = getEmptyPlant();
                setPlantTopImg(Plant.imgUrl);
                plantPreview.changePlantPreview(Plant);
            },
            dataIllegal: function() {
                var plantSchema = Plant.$data;
                for (var attr in plantSchema) {
                    if (plantSchema.hasOwnProperty(attr)) {
                        if (attr === '_id') {
                            continue;
                        }
                        if (Plant[attr] === '') {
                            return true;
                        }
                    }
                }
            },
        }
    });

    // isNew
    Plant._isNew = null;
    Plant.getIsNew = function() {
        return this._isNew;
    };
    Plant.setIsNew = function(isNew) {
        this._isNew = isNew;
        if (this._isNew) {
            Plant.$data = getEmptyPlant();
            jQuery('#btn').html('新增投稿');
        } else {
            jQuery('#btn').html('修改投稿');
        }
    };
    Plant.setIsNew(true);

    var PlantList = new Vue({
        el: '#list',
        data: {
            items: []
        },
        methods: {
            // 切换
            changePlant: function(item) {
                Plant.setIsNew(false);

                Plant.id = item._id;
                PlantList.copyPlant(item, Plant);

                setPlantTopImg(Plant.imgUrl);
                plantPreview.changePlantPreview(Plant);
            },
            // 增加
            addPlantInList: function(plant) {
                plantRequestUtil.addPlant(plant);
                PlantList.items.push(plant);
            },
            deletePlantInList: function(item) {
                var index = PlantList.items.indexOf(item._id);

                plantRequestUtil.deletePlant(item._id);
                PlantList.items.splice(index, 1);
            },
            findPlantById: function(id) {
                for (var i = 0; i < PlantList.items.length; i++) {
                    if (PlantList.items[i]._id === id) {
                        return PlantList.items[i];
                    }
                }
            },
            //  except id
            copyPlant: function(srcPlant, desPlant) {
                var plantSchema = getEmptyPlant();
                for (var attr in plantSchema) {
                    if (plantSchema.hasOwnProperty(attr)) {
                        desPlant[attr] = srcPlant[attr];
                    }
                }
            }
        }
    });

    plantRequestUtil.getList(PlantList);
}(preview, jQuery));
