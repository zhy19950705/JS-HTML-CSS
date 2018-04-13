// 作用域包括静态作用域和动态作用域，静态作用域也叫词法作用域，js采用的是词法作用域，词法作用域:定义在词法阶段的作用域
// js中的作用域是指可访问变量、对象、函数的集合，也就是调用他们能生效的代码区块
// 在同一个作用域里：var可以重复声明变量，let不能重复声明变量
// es5是函数作用域，即一个函数里面才是一个作用域，es6是块作用域（花括号{}里面才是一个作用域），如if,for花括号里面都是一个作用域
// var有变量提升，可以在变量声明之前使用，let不存在变量提升，在变量之前使用会报错。
console.log(a)
var a=100

// console.log(b)
// b=100

fn('zs')
function fn(name) {
    console.log(name)
}

//es3就有了块作用域。with,catch
for (var i = 0; i < 3; i++) {
    console.log(i)
}
console.log(i)

// let不会在块级作用域进行提升
{
    //TDZ start
  tmp='abc'; //ReferenceError
  console.log(tmp) //ReferenceError

  let tmp;//TDZ end
  console.log(tmp)  //undefined

  tmp=123;
  console.log(tmp) //123
}
// ES6规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域，
// 凡是在声明之前就使用这些变量就会报错，称为’暂时性死区'

//const必须在声明时赋值，不然就会报错。const声明的常量不能改
// 这里的常量指的是：数值、字符串、布尔值，对于引用类型（数组和对象），
// const只能保证指针是固定的，至于数组和对象内部有没有改变就是const不能控制的地方
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

// })()
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



