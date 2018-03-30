let add=(function () {
    let now=0;
    return {
        doAdd:function () {
            now++;
            console.log(now)
        }
    }
})()
add.doAdd()
add.doAdd()

//自由变量将从作用域链中去寻找，但是 依据的是函数定义时的作用域链，而不是函数执行时
function F1() {
    let a=100
    return function () {
        console.log(a)
    }
}
const f1=F1()
let a=200
f1()

function F2(f1) {
    let a=200
    console.log(f1())
}
F2(f1)
// setTimeout并不是延时多少秒后执行函数，而是多少秒后把函数扔进事件队列中等待执行，如果此时队列里有其他任务 的话那就不是精确的1秒了


// 利用立即执行函数形成闭包
// for(var i=0;i<5;i++){
//     (function(i){
//        setTimeout(function(){
//            console.log(i)
//        },i*1000)
//     })(i)
// }

// 利用setTimeout的第三个参数形成闭包
// for(var i=0;i<5;i++){
//     setTimeout(function(i){
//         console.log(i)
//     },i*1000,i)
// }

// 如果不是题目中指定了var，利用ES6的let就简单多了
// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)
// }

// 直接阻塞线程1s
for(var i=0;i<5;i++){
    var time=new Date();
    while(new Date()-time<1000){
       
    }
    console.log(i)
}

// 闭包的危害 导致原有作用域链不释放，造成内存泄漏