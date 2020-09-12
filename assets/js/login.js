//写入接口函数
$(function () {
    // 点击去注册，登录隐藏注册展现
    $("#link-register").on("click", function () {
        $(".register-box").show();
        $(".login-box").hide();

    });
    // 点击去登录，登录展现注册隐藏
    $("#link-login").on("click", function () {
        $(".login-box").show();
        $(".register-box").hide();

    });
    //  密码校验
    var form = layui.form
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],

    })
     
})