function foo(){
    function bar(a){
         var i=3;
         console.log(a+i)
    }
    for(var i=0;i<10;i++){
        bar(i*2)
    }
}
foo()

// 理想写法
var a=2;
(function foo(){
    var a=3;
    console.log(a)
})()
// (function(){

// })
console.log(a)

// 始终给函数表达式命名
setTimeout(timeoutHandler=()=>{
    console.info('i waited 1 second')
},1000)


// 倒置代码运行顺序
(function IIFE(def){
   def(window)
})(function def(global){
    var a=3;
    console.log(a);
    console.log(global.a)
})