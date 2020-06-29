$(function () {
    // 导入表单对象
    var form = layui.form;
    // 初始化下拉选框
    // form.render('select');

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

    // 动态获取分类列表数据
    function loadListData() {
        $.ajax({
            type: 'get',
            url: 'my/article/cates',
            success: function (res) {
                // 基于模板引擎渲染列表数据
                var result = template('list-tpl', res);
                $('#cate-list').html(result);
                // layui要求调用render方法重新渲染下拉列表
                form.render('select');
            }
        });
    };
    loadListData();

    // 初始化富文本编辑器
    initEditor();

    // 处理文章封面的预览效果
    var $img = $('#image');
    var options = {
        // 纵横比
        aspectRatio: 400 / 280,
        // 预览的区域
        preview: '.img-preview'
    };
    $img.cropper(options);

    // 控制图片的选择
    $('#select-btn').click(function () {
        // 弹出一个文件选择框
        $('#cover_img').trigger('click');
    });
    // 获取选中的文件内容
    $('#cover_img').change(function (e) {
        // 得到选中的文件内容
        var file = e.target.files[0];
        // 基于选中的文件创建一个临时预览地址
        var newImgURL = URL.createObjectURL(file);
        // 更新预览区图片地址
        $img.cropper('destroy').attr('src', newImgURL).cropper(options);
    });
});