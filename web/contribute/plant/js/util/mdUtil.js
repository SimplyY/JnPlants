var preview = {
    changePlantPreview: function (plant) {
        preview.changeNamePreview(plant.name);
        preview.changeNickNamePreview(plant.nickName);
        preview.changeArticlePreview(plant.article);
    },
    changeNamePreview: function (name) {
        changePreview(jQuery("#preview-name"), "###" + name);
    },
    changeNickNamePreview: function (nickName) {
        changePreview(jQuery("#preview-nickName"), "别名：" + nickName);

    },
    changeArticlePreview: function (article) {
        changePreview(jQuery("#preview-article"), article);
    }
};

function changePreview($previewDom, text) {
    $previewDom.html(markdown.toHTML(text));
}
