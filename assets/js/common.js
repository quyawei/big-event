/*
    通用的接口调用设置
*/
var baseURL = 'http://ajax.frontend.itheima.net/';
$.ajaxPrefilter(function (option) {
    // 形参option是jQuery请求方法的配置信息
    // 1.配置通用的URL地址
    option.url = baseURL + option.url;
    // 2.设置接口的通用请求头信息
    if (option.url.lastIndexOf('/my/') !== -1) { 
        // 所有包含my的请求路径需要进行权限验证(需要先登录)
        // header默认不存在，所以需要设置一个对象
        option.headers = {
            Authorrization: localStorage.getItem('mytoken')
        };
        // 3.处理通用的异常情况
        // 服务器响应结束时触发
        option.complete = function (res) {
            // 处理失败的情况
            if (res.responseJOSN.status === 1 && res.responseJOSN.message === '身份认证失败!') { 
                // 如果身份验证失败了，就跳转到登录页
                // 把无效token清除
                localStorage.removeItem('mytoken');
                location.href = './login.html';
            };
        };
    };
});