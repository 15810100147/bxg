define(['cookie', 'jquery', 'nprogress'], function (x,$,NProgress) {


    // NProgress.start()
    NProgress.start()

  

    // 检测用户的登录状态 如果没有登陆 就跳转回登陆页面
    var sessionId = $.cookie('PHPSESSID');
    // console.log(sessionId)
    if (!sessionId) {
        location.href = "/views/index/login.html";
        return
    };



    // 获取登陆时存取的数据 为了当前页面的头像 标题
    var aa = JSON.parse($.cookie('userinfo') || '{}');
    console.log(aa)
    $('#cookie-img img').attr('src', aa.tc_avatar);
    $('#cookie-title').html(aa.tc_name);

    // 侧边栏的下拉菜单
    $('.navs>ul>li>a').on('click', function () {
        $(this).siblings('ul').stop().slideToggle();
    });

    // 退出的功能

    // $('.header .fa-sign-out').closest('a').on('click',function(){

    //     // 把登录时相应的数据PHPSESSID删除
    //     // 把cookie存储的时间设置成当前时间 就可以删除了
    //     var date = new Date();
    //     // date.setTime(date.getTime()) 
    //     $.cookie('PHPSESSID','aa',{
    //         expires:date,
    //         path:'/'
    //     });
    //     location.href = "/views/index/login.html";


    // })

    // 后台给了退出登陆的接口


    $('.header .fa-sign-out').closest('a').on('click', function () {
        // http://api.botue.com/logout
        var option = {
            url: '/api/logout',
            type: 'post',
            success: function (data) {
                console.log(data);
                if (data.code == 200) {
                    location.href = "/views/index/login.html";
                }
            }
        }
        // location.href = "/views/index/login.html";

        $.ajax(option)

    })

    NProgress.done()

});