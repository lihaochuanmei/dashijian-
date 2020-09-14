$(function () {
    //定制验证规则
    var form = layui.form
    form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return '昵称长度必须在 1 ~ 6 个字符之间！'
            }
        }

    })

    initUserInfo()
    // 获取用户数据
    function initUserInfo() {
        $.ajax({
            method: "GET",
            url: "/my/userinfo",
            Header: { Authorization: localStorage.getItem("token") || "" },
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg("res.message")

                }
                console.log(res)
                // 利用val方法复制给表单
                form.val("formuser", res.data)
            }

        })
    }

    //实现重置按钮的效果

    $("#resetBtn").on("click", function (e) {
        e.preventDefault()
        initUserInfo()
    })




    
    $(".layui-form").on("submit", function (e) {
        e.preventDefault()
        $.ajax({
            method: "post",
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg("更新用户信息失败")
                }
                console.log(res)
                getUserInfo()

            }
        })
    })

    var layer = layui.layer
    function getUserInfo() {
        $.ajax({
            method: "get",
            url: '/my/userinfo',
            headers: { Authorization: localStorage.getItem("token") || "" },
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg("获取用户信息失败")
                }
                layer.msg(res.message)
                console.log(res)
                renderAvatar(res)
            }
        })
    };
    function renderAvatar(user) {
        var name = user.nickname || user.username;
        $("#welcome").html('欢迎&nbsp;&nbsp;' + name);
        if (user.user_pic !== null) {
            $(".layui-nav-img").attr("src", user.user_pic).show()
            $(".text-avatar").hide()

        }
        else {
            $(".layui-nav-img").hide()
            var first = name[0].toUpperCase()
            $(".text-avatar").html(first).show()
        }
    }



})