//var avalon = require('avalon2')
//require('../dist/mmRouter')
//var a = require('../tab1.html')
//var b = require('../tab2.html')
//var c = require('../tab3.html')

var vm = avalon.define({
    $id: 'test',
    main: '',
    aaa: "第一页的内容",
    bbb: "第二页的内容",
    ccc: "第三页的内容"
})

var map = {
    'aaa': '',
    'bbb': '',
    'ccc': ''
};

map.aaa = getHtml('../views/tab1.html');
map.bbb = getHtml('../views/tab2.html');
map.ccc = getHtml('../views/tab3.html');

avalon.router.add("/pager-{count:\\d+}", function(count){
    return '/aaa?pager-'+count
    //avalon.router.navigate('/aaa?pager-'+count, 1)
})
avalon.router.add("/:tab", function (param) {
    vm.main = map[param]
})



avalon.history.start({
    root: "/mmRouter",
    html5: true
})


var hash = avalon.history.getPath()
if (hash === '/exmaple6.html') {//比如一些网站没有, https://segmentfault.com/
    hash = '/aaa' 
}
avalon.router.navigate(hash, 2)//默认打开

avalon.scan(document.body)