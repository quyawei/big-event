$(function () {
    // 获取表单对象
    var form = layui.form;
    // 获取所有的文章分类数据
    function loadCateData() { 
        $.ajax({
            type: 'get',
            url: 'my/article/cates',
            success: function (res) {
                // 基于模板引擎渲染分类列表数据
                var tags = template('cate-tpl', res);
                $('#category').html(tags);
                // 更新渲染select(layui提供的方法)
                form.render('select');
            }
        });
    };
    loadCateData();
});