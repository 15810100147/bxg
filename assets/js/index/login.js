define(['jquery','cookie'],function(){
    $('form').on('submit', function (e) {
        //这个方法用来阻止默认事件 
        e.preventDefault();
        // 获取用户输入的用户名和密码
        var name = $('#name').val();
        var pass = $('#pass').val();
        // 用户不能输入为空的
        if (!name.trim() || !pass.trim()) {
            window.alert('请输入用户名或密码');
            return;
        }
        var option = {
            url: '/api/login',
            type: 'post',
            data: { tc_name: name, tc_pass: pass },
            success: function (data) {
                console.log(data);
                if (data.code === 200) {
                    $.cookie('userinfo',JSON.stringify(data.result),{
                        expires:7,
                        path:'/'
                    })
                    location.href="/views/index/inde1x.html"
                }
            },
            error: function () {
                window.alert('登陆失败!!');
            }
        }
        $.ajax(option);

    });
})