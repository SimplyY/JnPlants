/*global Qiniu */
/*global plupload */
/*global FileProgress */
// global jq

$.get("http://121.40.224.83:19110/get-qiniu-uptoken", function(data) {
    var My_Uptoken = data.uptoken;

    $(function() {
        var uploader = Qiniu.uploader({
            uptoken: My_Uptoken,
            domain: '7xkpdt.com1.z0.glb.clouddn.com',
            runtimes: 'html5,flash,html4',
            browse_button: 'pickfiles',
            container: 'load-image',
            drop_element: 'container',
            max_file_size: '4mb',
            flash_swf_url: 'https://dn-cdnjscn.qbox.me/ajax/libs/plupload/2.1.5/Moxie.swf',
            dragdrop: true,
            chunk_size: '2mb',
            get_new_uptoken: false,

            auto_start: true,
            init: {
                'FilesAdded': function(up, files) {
                    plupload.each(files, function(file) {
                        isImg(file.name);
                    });
                },
                'FileUploaded': function(up, file, info) {
                    var domain = up.getOption('domain');
                    var imgPath = $.parseJSON(info).key;
                    var sourceLink = String.format("http://{0}/{1}", domain, imgPath);

                    imgLink = dealImg(sourceLink);

                    insertImg(imgLink);
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

    function dealImg(IMG_URL) {
        var imgLink = String.format("{0}?{1}", IMG_URL, Qiniu.imageMogr2({
            strip: true,   // 布尔值，是否去除图片中的元信息
            thumbnail: '400x',   // 缩放操作参数
            quality: 100,
        }));
        return imgLink;
    }

    function insertImg(IMG_URL) {
        // ![](/images/2015/10/a)
        var imgMd = String.format('![upload_img]({0})', IMG_URL);
        var textInput = $('#text-input');
        var insertMd = textInput.val() + '\n\r'  + imgMd;

        textInput.val(insertMd);
        $('#preview').html(markdown.toHTML(insertMd));
    }

    function isImg(fileName) {
        // 确保图片格式
        var imgNameArray = ['jpeg', 'png', 'jpg'];
        var suffixs = fileName.split('.')[fileName.split('.').length - 1];
        if (_.indexOf(imgNameArray, suffixs) > -1) {
            return true;
        } else {
            alert('请上传图片, 且格式为' + imgNameArray.toString());
            return false;
        }
    }
});
