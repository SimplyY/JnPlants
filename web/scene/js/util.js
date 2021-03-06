exports.restfulPutRequest = function (apiUrl, id, changeInfo) {
    $.ajax({
        url: apiUrl + id,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(changeInfo),
        success: function() {
            console.log('put success');
        },
        fail: function() {
            console.log('put error');
        }
    });
};

exports.getQureyParams = function (url) {
    var searchParams = {};

    var qurey = url.split('?');
    // scene_id=1&user_id=2
    qurey = qurey[qurey.length -1];

    var params = qurey.split('&');
    for (var i = 0; i < params.length; i++) {
        // scene_id=1
        var keyValue = params[i].split('=');
        searchParams[keyValue[0]] = keyValue[1];
    }

    return searchParams;
};
