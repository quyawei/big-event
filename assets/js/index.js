$(function () {
    // 判断token是否存在
    var mytoken = localStorage.getItem('mytoken');
    if (!mytoken) {
        // 表示不存在，跳转到登录页
        location.href = './login.html';
    };
});