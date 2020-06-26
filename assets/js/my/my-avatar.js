$(function () {
    // 实现裁剪基本初始化效果
    $('.cropper-box img').cropper({
        // 纵横比
        aspectRatio: 1,
        // 指定预览区域
        preview: '.img-preview'
    });
});