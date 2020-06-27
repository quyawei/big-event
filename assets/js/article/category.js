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
            content: $('#add-tpl').html(),
            area: ['500px', '250px']
        });
        // 监听添加分类的表单提交事件
        $('#add-form').submit(function (e) {
            // 阻止表单的默认行为
            e.preventDefault();
            // 获取表单数据
            var fd = $(this).serialize();
            $.ajax({
                type: 'post',
                url: 'my/article/addcates',
                data: fd,
                success: function (res) { 
                    if (res.status === 0) { 
                        // 添加分类成功，提示一下并且关闭弹出层，刷新分类列表
                        layer.msg(res.message);
                        // 关闭弹出层
                        layer.close(addIndex);
                        // 刷新分类列表
                        loadListData();
                    };
                }
            });
        });
    });

    
});