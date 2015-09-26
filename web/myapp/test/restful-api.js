var should = require('should');
var request = require('supertest');
var config = require('./config/config');


describe('restful-api.js', function() {
    before(function(done) {
        config.ready(function() {
            app = config.app;
            // app.ROOT_API_ROUTE = '/JnPlant/api';
            sceneApi = app.ROOT_API_ROUTE + "/scene";
            console.log(config.scenes[0]._id.toString());
            done();
        });
    });

    describe('scene-api', function() {
        // 通过 http 请求的 post 方法增加一个 scene， 其中 url = 域名 + sceneApi
        it('test: add a scene', function(done) {
            request(app)
                .post(sceneApi)
                .send(config.scenes[0])
                .expect(201, done);
        });
        // get 方法得到 scene list
        it('test: get scene list', function(done) {
            config.scenes[0]._id = config.scenes[0]._id.toString();
            request(app)
                .get(sceneApi)
                .expect(config.scenes)
                .expect(200, done);
        });
        // put 方法 : update a scene
        it('test: update a scene', function(done) {
            config.scenes[0].title = 'title hasUpdate';
            request(app)
                .put(sceneApi + '/' + config.scenes[0]._id)
                .send({
                    title: 'title has updated'
                })
                .expect(200, done);
            // request(app)
            //     .get(sceneApi)
            //     .expect(config.scenes)
            //     .expect(200, done);
        });
        it('test: delete a scene', function (done) {
            request(app)
                .del(sceneApi + '/' + config.scenes[0]._id)
                .expect(204, done);
        });
    });
});
