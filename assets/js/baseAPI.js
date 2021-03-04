//每次调用ajax之前都会调用这个函数
$.ajaxPrefilter(function(options){
    //根路径拼接
    options.url="http://127.0.0.1:1718"+options.url
})