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

    // 获取表格列表数据
    function loadTableData() { 
        $.ajax({
            type: 'get',
            url: 'my/article/list',
            data: {
                // 页码：必须从1开始
                pagenum: 1,
                // 每页显示多少条数据
                pagesize: 10
            },
            success: function (res) {
                
            }
        });
    };
    loadTableData();
});