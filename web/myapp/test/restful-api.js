var should = require('should');
var request = require('supertest');
var config = require('./config/config');


describe('in restful-api.js', function() {
    before(function(done) {
        config.ready(function() {
            app = config.app;
            // app.ROOT_API_ROUTE = '/JnPlant/api';
            sceneApi = app.ROOT_API_ROUTE + "/scene";
            done();
        });
    });

    describe('test: scene-api', function() {
        // 通过 http 请求的 post 方法增加一个 scene， 其中 url = 域名 + sceneApi
        it('test: add a scene', function(done) {
            request(app)
                .post(sceneApi)
                .send(config.scenes[0])
                .expect(201, done);
        });
        // get 方法得到 scene list
        it('test: get scene list', function(done) {
            request(app)
                .get(sceneApi)
                .expect(config.scenes)
                .expect(200, done);
        });
        // get 方法 查询， 通过qurey语句，注意返回的是一个数组
        it('test: get scene by qurey', function (done) {
            request(app)
                .get(sceneApi + '?title__equals=' + config.scenes[0].title)
                .expect([config.scenes[0]])
                .expect(200, done);
        });
        // put 方法 : update a scene by id
        it('test: update a scene', function(done) {
            request(app)
                .put(sceneApi + '/' + config.scenes[0]._id)
                .send({
                    title: 'title has updated'
                })
                .expect(200, done);
        });
        // delete 方法 : delete a scene by id
        it('test: delete a scene', function (done) {
            request(app)
                .del(sceneApi + '/' + config.scenes[0]._id)
                .expect(204, done);
        });
    });
});
