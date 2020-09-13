// 在条用ajax的时候，会先来到fliter函数当中，此时可以拼接一下URL
$.ajaxPrefilter(function (options) {

    options.url = "http://ajax.frontend.itheima.net" + options.url

})