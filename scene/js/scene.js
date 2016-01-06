(function(scenePreview, jQuery) {
    var today = new Date();

    //  点击添加按钮新增投稿
    jQuery('.add').click(function() {
        Scene.setIsNew(true);
        showTipInfo("新增投稿");
        setSceneTopImg(Scene.imgUrl);
        scenePreview.changeScenePreview(Scene);
    });

    // 上传图片
    uploadImg('upload-top-img', 'upload-image', setSceneTopImg, 0.1, 500);
    uploadImg('upload-article-img', 'upload-image', insertImgInArticle, 0.08, 400);

    function insertImgInArticle(IMG_URL) {
        // ![](/images/2015/10/a)
        var imgMd = String.format('![upload_img]({0})', IMG_URL);
        var textInput = jQuery('#article-input');
        var insertMd = textInput.val() + '\n' + imgMd;

        Scene.article = insertMd;
        jQuery('#preview-article').html(markdown.toHTML(insertMd));
    }

    function setSceneTopImg(IMG_URL) {
        jQuery('.top-img').attr('src', IMG_URL);
        Scene.imgUrl = IMG_URL;
    }

    //  scene schema
    function getEmptyScene() {
        return {
            title: '',
            article: '',
            authorId: 123,
            authorName: 'test',
            location: '',
            longitude: '',
            latitude: '',
            month: today.getMonth() + 1,
            season: getSeasonByMonth(this.month),
            imgUrl: '',
            hasChecked: false,
            _id: ''
        };
    }

    window.Scene = new Vue({
        el: '#article',
        data: getEmptyScene(),
        methods: {
            // 投稿
            contribute: function() {
                if (Scene.dataIllegal()) {
                    showTipInfo("请将信息填写完整");
                    return;
                }

                var scene = {};
                // 增加
                if (Scene.getIsNew()) {
                    //if addNewScene();
                    SceneList.copyScene(Scene, scene);
                    SceneList.addSceneInList(scene);
                    showTipInfo("*^_^* 投稿成功");
                } else {
                    // change
                    scene = SceneList.findSceneById(Scene._id);
                    SceneList.copyScene(Scene, scene);
                    sceneRequestUtil.changeScene(scene._id, scene);
                    showTipInfo("*^_^* 修改成功");
                }
                Scene.$data = getEmptyScene();
                setSceneTopImg(Scene.imgUrl);
                scenePreview.changeScenePreview(Scene);
            },
            dataIllegal: function() {
                var sceneSchema = Scene.$data;
                for (var attr in sceneSchema) {
                    if (sceneSchema.hasOwnProperty(attr)) {
                        if (attr === '_id') {
                            continue;
                        }
                        if (Scene[attr] === '') {
                            return true;
                        }
                    }
                }
            },
        }
    });

    // isNew
    Scene._isNew = null;
    Scene.getIsNew = function() {
        return this._isNew;
    };
    Scene.setIsNew = function(isNew) {
        this._isNew = isNew;
        if (this._isNew) {
            Scene.$data = getEmptyScene();
            jQuery('#btn').html('新增投稿');
        } else {
            jQuery('#btn').html('修改投稿');
        }
    };
    Scene.setIsNew(true);

    var SceneList = new Vue({
        el: '#list',
        data: {
            items: []
        },
        methods: {
            // 切换
            changeScene: function(item) {
                Scene.setIsNew(false);

                Scene.id = item._id;
                SceneList.copyScene(item, Scene);

                setSceneTopImg(Scene.imgUrl);
                scenePreview.changeScenePreview(Scene);
            },
            // 增加
            addSceneInList: function(scene) {
                sceneRequestUtil.addScene(scene);
                SceneList.items.push(scene);
            },
            deleteSceneInList: function(item) {
                var index = SceneList.items.indexOf(item._id);

                sceneRequestUtil.deleteScene(item._id);
                SceneList.items.splice(index, 1);
            },
            findSceneById: function(id) {
                for (var i = 0; i < SceneList.items.length; i++) {
                    if (SceneList.items[i]._id === id) {
                        return SceneList.items[i];
                    }
                }
            },
            //  except id
            copyScene: function(srcScene, desScene) {
                var sceneSchema = getEmptyScene();
                for (var attr in sceneSchema) {
                    if (sceneSchema.hasOwnProperty(attr)) {
                        if (attr === 'season') {
                            desScene.month = parseInt(srcScene.month, 10);
                            desScene.season = getSeasonByMonth(desScene.month);
                            continue;
                        }
                        desScene[attr] = srcScene[attr];
                    }
                }
            }
        }
    });

    function getSeasonByMonth(month) {
        if (jQuery.inArray(month, [3, 4, 5]) !== -1) {
            return '春';
        } else if (jQuery.inArray(month, [6, 7, 8]) !== -1) {
            return '夏';
        } else if (jQuery.inArray(month, [9, 10, 11]) !== -1) {
            return '秋';
        } else {
            return '冬';
        }
    }

    sceneRequestUtil.getList(SceneList);
}(preview, jQuery));
