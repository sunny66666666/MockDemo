require.config({
    paths: {
        mock: 'mock'
    }
});

// 加载 Mock
require(['mock'], function(Mock) {

    /*第一部分与第二部分没有关系*/

    /*第一部分*/
    // Mock.mock( template )
    //数据模板
    var data = Mock.mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    });
    //打印到body上
    $('<pre>').text(JSON.stringify(data, null, 4)).appendTo('body');


    /*第二部分*/
    // Mock.mock(rurl, template)
    Mock.mock(/\.json/, {    //匹配.json文件
        'list|1-10': [{      //数据模板
            'id|+1': 1,
            'email': '@EMAIL',
            'regexp3': /\d{5,10}/
        }]
    });
    $.ajax({
        url: 'hello.json',   //请求访问json文件，拦截hello.json的请求，返回mock数据模板中的数据
        dataType: 'json'
    }).done(function(data, status, jqXHR) {
        //获得mock数据模板中的数据，打印到body上
        $('<pre>').text(JSON.stringify(data, null, 4)).appendTo('body');
    })
});