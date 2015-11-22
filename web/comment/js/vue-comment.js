var server = require('./server.js');

var SendComment = new Vue({
    el: "#comment-area",
    data: getEmptyComment(),
    methods:{
        send: function() {
            var comment = {};
            CommentList.copyComment(SendComment, comment);
            CommentList.addComment(comment);
            SendComment.$data = getEmptyComment();
        }
    }
});

var CommentList = new Vue({
    el: "#comment-list",
    data: {
        items: []
    },
    methods:{
        reponseClick: function(item) {
            console.log("ll");
        },
        addComment: function(comment) {
            server.addComment(comment);
            CommentList.items.push(comment);
            console.log(CommentList.items);
        },
        copyComment: function(srcComment, decComment) {
            var commentSchema = getEmptyComment();
            for(var attr in commentSchema){
                if(commentSchema.hasOwnProperty(attr)){
                    decComment[attr] = srcComment[attr];
                }
            }
        }
    },
});


function getEmptyComment(){
    return {
        userId: '',
        createdDate: '',
        createdTime: '',
        content: '',
        _id: ''
    };
}

module.exports = {
    CommentList:　CommentList
};
