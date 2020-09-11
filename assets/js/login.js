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
})