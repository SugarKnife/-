$(function () {
    getUserInfo()
    //导入layer
    let layer = layui.layer
    $("#btnLogout").on("click", function () {
        layer.confirm('确认退出吗', {
            icon: 3,
            title: '提示'
        }, function (index) {
            localStorage.removeItem("token")
            location.href = "../../login.html"
            layer.close(index);
        });
    })
})
//获取用户信息
function getUserInfo() {
    $.ajax({
        type: "get",
        url: "/my/userinfo",
        success: function (res) {
            if (res.status !== 0) {
                return layui.layer.msg("获取用户信息失败")
            }
            //渲染用户信息
            renderAvatar(res.data)
        },
    })
}
//定义渲染用户信息函数
function renderAvatar(user) {
    let name = user.nickname || user.username
    $("#welcome").html("您好&nbsp;&nbsp" + name)
    $(".layui-nav-img").attr("src", user.user_pic)
}