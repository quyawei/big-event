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

    // 弹出层唯一标识
    var addIndex = null;

    // 添加分类(通过弹出层方式实现)
    $('#addCategory').click(function () {
        // 实现弹出层效果
        addIndex = layer.open({
            type: 1,
            title: '添加分类',
            content: '<div>弹出内容</div>',
            area: ['500px', '250px']
        });
    });
});