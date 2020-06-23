$(function () {
    // 判断token是否存在
    var mytoken = localStorage.getItem('mytoken');
    if (!mytoken) {
        // 表示不存在，跳转到登录页
        location.href = './login.html';
    };
    // 首页加载时需要调用后台接口获取用户信息
    function loadUserInfo () { 
        $.ajax({
            type: 'get',
            url: 'my/userinfo',
            // my开头的请求都需要携带请求头，作用：权限验证(只有登录后才能访问)
            // headers: {
            //     Authorization: localStorage.getItem('mytoken')
            // },
            success: function (res) {
                if (res.status === 0) { 
                    // 获取用户信息
                    var info = res.data;
                    // 把用户信息填充到指定位置
                    // 填充用户名
                    $('#welcome-username').html(info.username);
                    $('#nav-username').html(info.username);
                    // 填充头像信息
                    // info.user_pic = 'http://t.cn/RCzsdCq';
                    if (info.user_pic) {
                        // 存在头像数据，显示一张图片
                        // 删除默认的头像
                        $('#welcome-username').parent().prev('div').remove();
                        // 添加新的头像
                        $('#welcome-username').parent().prepend('<img src="' + info.user_pic + '" alt="" />');

                        $('#nav-username').prev('div').remove();
                        $('#nav-username').prepend('<img src="' + info.user_pic + '" alt="" />');
                    } else { 
                        // 头像不存在，显示div

                    };
                };
            }
        });
    };
    loadUserInfo();
    // 绑定退出按钮的点击事件
    $('#logout-btn').click(function () {
        layer.confirm('确认要退出吗?', {icon: 3, title:'提示'}, function(index){
            // 实现退出的功能：清除token,跳转到登录页面
            localStorage.removeItem('mytoken');
            // 关闭弹窗
            layer.close(index);
            // 跳转到登录页面
            location.href = './login.html';
        });
    });
});