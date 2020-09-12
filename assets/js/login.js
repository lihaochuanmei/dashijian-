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
        // var username = $("#registerpage #uname").val()
        // var password = $("#registerpage #passwords").val()
        var username = $("#registerpage [name=username]").val()
        var password = $("#registerpage [name=password]").val()
        //    阻止默认提交；
        e.preventDefault()
        // console.log(username,password);
        // 根据文档发起请求
        $.post(
            'http://ajax.frontend.itheima.net/api/reguser',
            {
                username: username,
                password: password,
            },
            function (res) {
                if (res.status !== 0) {
                    return "注册失败"
                }
            }
        )
    });

    // 开始表单登录事件
    $("#loginpage").on("submit", function (e) {
        // var username = $("#registerpage #uname").val()
        // var password = $("#registerpage #passwords").val()
        var username = $("#loginpage [name=username]").val()
        var password = $("#loginpage [name=password]").val()
        //    阻止默认提交；
        e.preventDefault()
        // console.log(username,password);
        // 根据文档发起请求
        $.post(
            'http://ajax.frontend.itheima.net/api/login',
            {
                username: username,
                password: password,
            },
            function (res) {
                if (res.status !== 0) {
                    return "登录失败"
                }
                location.href = '/index.html'
                console.log(res.token)
                localStorage.setItem('token', res.token)
            }
        )
    })
    // $("#loginpage").on("submit", function (e) {
    //     console.log(username, password)
    //     e.preventDefault()
    //     $.post(
    //         'http://ajax.frontend.itheima.net/api/login',
    //         {
    //             username: $("#loginpage[name = username]").val(),
    //             password: $("#loginpage[name = password]").val(),
    //         },
    //         function (res) {
    //             if (res.status !== 0) {
    //                 return "登录失败"
    //             }


    //         }
    //     )
    // })

})