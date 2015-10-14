(function(changeScene) {
    var editedScene = new Vue({
        el: '#article',
        data:{
            location: '',
            month: '',
            title: '',
            article: '',
            id: ''
        },
        methods: {
            // 投稿
            contribute: function() {
                scene = sceneList.findSceneById(editedScene.id);
                copyScene(editedScene, scene);
            }
        }
    });

    var sceneList = new Vue({
        el: '#list',
        data: {
            items: [
                {title: '春薄日暖花相惜1',author: 'XXX',
                 month: '3',season: '春',location: 'lala',article: '', _id:1},
                {title: '春薄日暖花相惜2',author: 'YYY',
                 month: '4',season: '春',location: 'jkkkl',article: '', _id:2},
            ]
        },
        methods: {
            changeEditedScene: function(item) {
                editedScene.id = item._id;
                copyScene(item, editedScene);

                changeScene.changeScenePreview(item);
            },
            findSceneById: function (id) {
                for (var i = 0; i < sceneList.items.length; i++) {
                    if (sceneList.items[i]._id === id) {
                        return sceneList.items[i];
                    }
                }
            }
        }
    });

//  except id
    function copyScene(srcScene, desScene) {
        desScene.location = srcScene.location;
        desScene.month = srcScene.month;
        desScene.title = srcScene.title;
        desScene.article = srcScene.article;
    }
}(changeScene));
