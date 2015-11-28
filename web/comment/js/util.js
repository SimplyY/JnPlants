exports.getQureyParams = function(url) {
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

exports.restfulPutRequest = function (apiUrl, id, changeInfo, callback) {
    $.ajax({
        url: apiUrl + id,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(changeInfo),
        success: function() {
            callback();
            console.log('put success');
        }
    });
};

exports.getDateString = function (date) {
    var dateString = '';
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    var dateInMonth = date.getDate().toString();

    dateString = year + '-' + month + '-' + dateInMonth;
    return dateString;
};

exports.getTimeString = function (date) {
    var timeString = '';
    var hour = date.getHours().toString();
    var minutes = date.getMinutes().toString();
    var seconds = date.getSeconds().toString();

    timeString = hour + ':' + minutes + ':' + seconds;
    return timeString;
};
