var preview = {
    changeScenePreview: function (scene) {
        preview.changeTitlePreview(scene.title);
        preview.changeLocationPreview(scene.location);
        preview.changeMonthPreview(scene.month);
        preview.changeArticlePreview(scene.article);
    },

    changeTitlePreview: function (title) {
        changePreview(jQuery("#preview-title"), "###" + title);
    },
    changeLocationPreview: function (location) {
        changePreview(jQuery("#preview-location"), "地点：" + location);

    },
    changeMonthPreview: function (month) {
        changePreview(jQuery("#preview-month"), "月份：" + month + "月");

    },
    changeArticlePreview: function (article) {
        changePreview(jQuery("#preview-article"), article);
    }
};

function changePreview($previewDom, text) {
    $previewDom.html(markdown.toHTML(text));
}
