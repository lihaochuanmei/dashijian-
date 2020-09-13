$(function () {
    // 刷新页面获取用户数据
    getUserInfo();
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
                renderAvatar(res.data)

            }
        })
    };
    // 渲染页面用户数据
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
    var layer = layui.layer
    $('.clickbtn').on('click', function () {
        // 提示用户是否确认退出
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
            //do something
            // 1. 清空本地存储中的 token
            localStorage.removeItem('token')
            // 2. 重新跳转到登录页面
            location.href = '/login.html'
        })
    })
    
})