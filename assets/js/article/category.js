$(function () {
    // 加载分类列表数据
    function loadListData () { 
        $.ajax({
            type: 'get',
            url: 'my/article/cates',
            success: function (res) {
                // 基于模板引擎渲染列表数据
                var result = template('list-tpl', res);
                $('.layui-table tbody').html(result);
            }
        });
    };
    loadListData();
});