//写入接口函数
$(function () {
    // 点击去注册，登录隐藏注册展现
    $("#link-register").on("click", function () {
        $(".registerbox").show();
        $(".login-box").hide();

    });
    // 点击去登录，登录展现注册隐藏
    $("#link-login").on("click", function () {
        $(".login-box").show();
        $(".registerbox").hide();

    });
    // 自定义验证规则
    var form = layui.form
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        repwd: function (value) {
            var pwd = $(".registerbox [name=password]").val()
            if (pwd !== value) {
                return "两次密码不一致！！！！"
            }
        }
    })
})