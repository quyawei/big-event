$(function () {
    // 实现裁剪基本初始化效果
    var $image = $('.cropper-box img');
    var options = {
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
    };
    $image.cropper(options);

    // 绑定上传图片按钮的点击事件
    $('#uploadImg').click(function () {
        // 点击上传按钮，但是要触发file标签内的点击行为
        $('#selectImg').trigger('click');
    });

    // 获取选中的文件的信息
    $('#selectImg').change(function (e) {
        // change事件触发条件：表单输入域内容发生变化时触发
        // 选中文件后触发该事件函数
        // 获取选中的文件信息
        var file = e.target.files[0];
        // 获取到文件信息后需要显示到左侧图片区域
        // URL.createObjectURL方法的作用：根据选中的文件生成一个预览URL地址
        var newImgURL = URL.createObjectURL(file);
        // 把地址更新到图片的src属性上即可
        $image.cropper('destory') // 销毁之前的裁剪区域
            .attr('src', newImgURL) // 更新图片的路径
            .cropper(options); // 重新生成一份新的裁剪区域
    });
});