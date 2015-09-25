var restful = require('node-restful');
module.exports = function(app, ROOT_ROUTE, route) {
    // Setup the controller for REST.
    var rest = restful.model(
        'scene',
        app.models.scene
    ).methods(['get', 'put', 'post', 'delete']);

    // Register this endpoint with the application.
    rest.register(app, '/' + ROOT_ROUTE  + route);
    console.log('/' +ROOT_ROUTE +  route);


    // Return middleware.
    return function(req, res, next) {
        next();
    };
};
