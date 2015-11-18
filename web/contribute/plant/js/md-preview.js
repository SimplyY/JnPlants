(function(plantPreview) {
    function Editor(article) {
        this.update = function() {
            plantPreview.changeArticlePreview(article.value);
        };
        this.update();
    }

    function InputName(name) {
        this.update = function() {
            plantPreview.changeNamePreview(name.value);
        };
        this.update();
    }

    function InputNickName(nickName) {
        this.update = function() {
            plantPreview.changeNickNamePreview(nickName.value);
        };
        this.update();
    }

    var $ = function(id) {
        return document.getElementById(id);
    };

    var article = $("article-input");
    article.editor = new Editor(article);
    var name = $("name");
    name.inputName = new InputName(name);
    var nickName = $("nickName");
    nickName.inputNickName = new InputNickName(nickName);
}(preview));
