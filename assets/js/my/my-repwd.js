$(function () {
    // 控制表单提交
    $('#form').submit(function (e) {
        e.preventDefault();
        // 获取表单数据
        var fd = $(this).serialize();
        // 调用接口修改密码
        $.ajax({
            type: 'post',
            url: 'my/updatepwd',
            data: fd,
            success: function (res) {
                // 更新成功后，提示
                if (res.status === 0) {
                    layer.msg(res.message);
                };
            }
        });
    });
});