var xhr=null;
if(window.XMLHttpRequest){
    // 非IE内核
    xhr=new XMLHttpRequest()
}else if(window.ActiveXObject){
    xhr=new ActiveXObject('Microsoft.XMLHTTP')
}

if(xhr){
    xhr.open('GET','ajaxServer.action');
    // xhr.open('POST','url',true)
    xhr.onreadystatechange=function(){
        // readyState值说明  
        // 0,初始化,XHR对象已经创建,还未执行open  
        // 1,载入,已经调用open方法,但是还没发送请求  
        // 2,载入完成,请求已经发送完成  
        // 3,交互,可以接收到部分数据  
        // 4,完成
        if(xhr.readyState==4&&xhr.status==200){
            // 一般会返回JSON或XML数据格式  
            console.log(xhr.responseText);
            // 主动释放,JS本身也会回收的  
            xhr=null;
        }
    }
    xhr.send()
    // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // xhr.send('name=han')
}

