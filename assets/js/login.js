//登录和注册的显示与隐藏
$("#link-login").on("click", function () {
    $(".reg-box").hide()
    $(".login-box").show()
})
$("#link-reg").on("click", function () {
    $(".reg-box").show()
    $(".login-box").hide()
})
//从layui中获取form对象和layer对象
let form = layui.form
let layer=layui.layer
//自定义校验规则
form.verify({
    password: [
        /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
    ],
    repwd: function (value) {
        let pwd = $(".reg-box [name=password]").val()
        if (pwd !== value) {
            return "两次输入的密码不一致！"
        }
    }
})
//注册事件
$("#form-reg").on("submit", function (e) {
    e.preventDefault()
    $.ajax({
        type: "post",
        url: "/api/reguser",
        data: $(this).serialize(),
        success: function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg("注册成功")
            $("#link-login").click()
        }
    })
})
//登录事件
 $("#form-login").on("submit",function(e){
     e.preventDefault()
     $.ajax({
         type:"post",
         url:"/api/login",
         data:$(this).serialize(),
         success:function(res){
             if (res.status !== 0) {
                 return layer.msg(res.message)
             }
             layer.msg("登录成功")
             localStorage.setItem("token",res.token)
             location.href="../../index.html"
         }
     })
 })