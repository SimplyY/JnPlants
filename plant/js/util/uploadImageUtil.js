/*global Qiniu */
/*global plupload */
// global jq

// if you use it please README, all are very important
// 0. requrie qiniu, plupload, jq, like image-bew.html
// 1. write html  need a button id='pickfiles', and button's container id = 'upload-image'
// 2. text-input and preivew just like how to use markdown.js
// 3. upload max_file_size: '2mb'

// 从服务器端，获取七牛云的uptoken

var uploadImg = function (uploadButtonId, buttonContainerId, setUploadImgFun, maxFileSizeMb, width) {
    jQuery.get("http://121.40.224.83:8090/get-qiniu-uptoken", function(data) {
        var My_Uptoken = data.uptoken;

        jQuery(function() {
            var uploader = Qiniu.uploader({
                uptoken: My_Uptoken,
                domain: '7xkpdt.com1.z0.glb.clouddn.com',
                runtimes: 'html5,flash,html4',
                browse_button: uploadButtonId,
                container: buttonContainerId,
                max_file_size: maxFileSizeMb.toString() + 'mb',
                flash_swf_url: 'https://dn-cdnjscn.qbox.me/ajax/libs/plupload/2.1.5/Moxie.swf',
                get_new_uptoken: false,
                auto_start: true,
                init: {
                    'FilesAdded': function(up, files) {
                        plupload.each(files, function(file) {
                            var isLegal = checkIsImg(file.name) && checkSize(file.size);

                            if (!isLegal) {
                                up.removeFile(file);
                            }
                        });
                    },
                    'FileUploaded': function(up, file, info) {
                        var domain = up.getOption('domain');
                        var imgPath = jQuery.parseJSON(info).key;
                        var sourceLink = String.format("http://{0}/{1}", domain, imgPath);

                        imgLink = dealImg(sourceLink, width);

                        setUploadImgFun(imgLink);
                    },
                    'Error': function(up, err, errTip) {
                        console.log(err);
                    }
                }
            });

            uploader.bind('FileUploaded', function() {
                console.log('hello man,a file is uploaded');
            });
        });

        function dealImg(IMG_URL, width) {
            var imgLink = String.format("{0}?{1}", IMG_URL, Qiniu.imageMogr2({
                strip: true,   // 布尔值，是否去除图片中的元信息
                thumbnail:  +'x',   // 缩放操作参数
            }));
            return imgLink;
        }

        function checkIsImg(fileName) {
            // 确保图片格式
            var imgNameArray = ['jpeg', 'png', 'jpg'];

            var suffix = fileName.split('.')[fileName.split('.').length - 1];
            if (imgNameArray.findIndex(function (element) {
                    return element === suffix;
                }) > -1) {
                return true;
            } else {
                alert('请上传图片, 且格式为' + imgNameArray.toString());
                return false;
            }
        }
    //  meta size 1byte
        function checkSize(fileSize) {
            var sizeMb = fileSize/1024/1024;
            if (sizeMb > maxFileSizeMb) {
                alert("上传图片不能大于" +maxFileSizeMb.toString() +"mb");
                return false;
            }
            return true;
        }
    });
};
