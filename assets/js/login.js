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
        // 密码校验1
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        //确认密码校验
        repwd: function (value) {
            var pwd = $(".register-box [name=password]").val()
            if (pwd !== value) {
                return "两次密码不一致"
            }
        }
    })
    // 开始表单提交事件
    // 注册时的请求
    $("#registerpage").on("submit", function (e) {
        var formdata = $(this).serialize()
        // var username = $("#registerpage #uname").val()
        // var password = $("#registerpage #passwords").val()
        var username = $("#registerpage [name=username]").val()
        var password = $("#registerpage [name=password]").val()
        //    阻止默认提交；
        e.preventDefault()
        // console.log(username,password);
        // 根据文档发起请求
        $.post(
            '/api/reguser', {
            username: username,
            password: password,
        },

            function (res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg("恭喜您，注册成功")
                $("#link-login").click()
            }
        )
    });



    // 开始表单登录事件
    $("#loginpage").on("submit", function (e) {
        console.log($(this).serialize())
        // var username = $("#registerpage #uname").val()
        // var password = $("#registerpage #passwords").val()
        var username = $("#loginpage [name=username]").val()
        var password = $("#loginpage [name=password]").val()
        //    阻止默认提交；
        e.preventDefault()
        // console.log(username,password);
        // 根据文档发起请求
        $.post(
            '/api/login', {
            username: username,
            password: password,
        },
            function (res) {
                if (res.status !== 0) {
                    return layer.msg('登录失败！')
                }
                layer.msg("恭喜您，登录成功")
                localStorage.setItem("token", res.token)
                location.href = '/index.html'
            }
        )
    })


})