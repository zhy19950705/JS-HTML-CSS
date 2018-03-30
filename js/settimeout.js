<!DOCTYPE html>
<head>
<title>setTimeout</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    </head>
    <body>
    <h1>setTimeout</h1>
    <span id="content">时间</span>
    <button onclick="start()">开始</button>
    <script>
var x = 00,
    y = 00,
    z = 00;
function start () {
    if (x<= 59 && x>=0 && y<=59 && y>=0 && z<=59 && z>=0) {
        let content = document.getElementById('content');
        content.innerHTML = z + ":" + y + ":" + x;
        console.log(x);
        x = x + 1;
    } else if (y<=59 && y>=0 && z<=59 && z>=0) {
        y = y + 1;
        x = 0;
    } else if (z<=59 && z>=0){
        z = z + 1;
        x = 0;
        y = 0;
    }
    setTimeout ("start()",1000);  //注意，这里调用要用引号包围
}
</script>
</body>
</html>

作者：caraline
链接：https://juejin.im/post/5aa4c47af265da239866e236
    来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。