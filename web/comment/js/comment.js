function getComment(){
        return {
            avatar: '',
            commentator: '人asdf',
            commentTime: '2015-11-8',
            commentWords: 'ddd'
        };
    }

var SendComment = new Vue({
    el: "#comment-area",
    data: getComment(),
    methods:{
        send: function() {
            CommentList.addComment();
        }
    }
});

var CommentList = new Vue({
    el: "#comment-list",
    data: {
        items: [
            {
                avatar: '',
                commentator: '人asdf',
                commentTime: '2015-11-8',
                commentWords: '尝试 Vue.js 最简单的方法是使用 JSFiddle Hello World 例子。在浏览器新标签页中打开它，跟着我们查看一些基础示例。如果你喜欢用包管理器下载/安装，查看安装教程。'
            }
        ]
    },
    methods:{
        reponseClick: function(item) {
            console.log("lll");
        },
        addComment: function() {
            // var test = SendComment.$data;
            console.log(SendComment);
            CommentList.items.push(SendComment);
        }
    },
});
