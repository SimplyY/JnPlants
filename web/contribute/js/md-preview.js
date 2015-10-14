(function(changeScene) {
    function Editor(article) {
        this.update = function() {
            changeScene.changeArticlePreview(article.value);
        };
        this.update();
    }

    function InputTitle(title) {
        this.update = function() {
            changeScene.changeTitlePreview(title.value);
        };
        this.update();
    }

    function InputLocation(location) {
        this.update = function() {
            changeScene.changeLocationPreview(location.value);
        };
        this.update();
    }

    function InputMonth(month) {
        this.update = function() {
            changeScene.changeMonthPreview(month.value);
        };
        this.update();
    }

    var $ = function(id) {
        return document.getElementById(id);
    };

    var article = $("article-input");
    article.editor = new Editor(article);
    var title = $("title");
    title.inputTitle = new InputTitle(title);
    var location = $("location");
    location.inputLocation = new InputLocation(location);
    var month = $("month");
    month.inputMonth = new InputMonth(month);
}(changeScene));
