$(function () {
    // 导入表单对象
    var form = layui.form;
    // 初始化下拉选框
    form.render('select');

    // 绑定表单提交事件
    $('#add-form').submit(function (e) {
        e.preventDefault();
        // var fd = $(this).serialize();
        // 处理文件上传(this指的是谁？表单元素)
        var fd = new FormData(this);
        $.ajax({
            type: 'post',
            url: 'my/article/add',
            data: fd,
            // 防止把请求参数转换为字符串
            processData: false,
            // 禁止使用默认的提交参数类型
            contentType: false,
            success: function (res) {
                if (res.status === 0) {
                    layer.msg(res.message);
                }
            }
        });
    });
});