var changeScene = {
    changeScenePreview: function (scene) {
        changeScene.changeTitlePreview(scene.title);
        changeScene.changeLocationPreview(scene.location);
        changeScene.changeMonthPreview(scene.month);
        changeScene.changeArticlePreview(scene.article);
    },
    changeTitlePreview: function (title) {
        changePreview(jQuery("#preview-title"), "##" + title);
    },
    changeLocationPreview: function (location) {
        if (location === '') {
            changePreview(jQuery("#preview-location"), location);
        } else {
            changePreview(jQuery("#preview-location"), "地点：" + location);
        }
    },
    changeMonthPreview: function (month) {
        if (month === '') {
            changePreview(jQuery("#preview-month"), month);
        } else {
            changePreview(jQuery("#preview-month"), "月份：" + month + "月");
        }
    },
    changeArticlePreview: function (article) {
        changePreview(jQuery("#preview-article"), article);
    }
};

function changePreview($previewDom, text) {
    $previewDom.html(markdown.toHTML(text));
}
