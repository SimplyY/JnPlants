exports.restfulPutRequest = function function_name(apiUrl, id, changeInfo) {
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
