// let a=true
// setTimeout(()=>{
//     a=false
// },100)
// //死循环
// while (a){
//     console.log('while')
// }

// js是单线程的，任务分为宏任务和微任务，
// 宏任务包括整体代码script,setTimeout,setInterval
// 微任务包括Promise,process.nextTick
// 不同类型的任务会进入对应的Event Queue，进入整体代码后，开始第一次循环，接着执行所有微任务；
// 然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有微任务。
setTimeout(function() {
    console.log('setTimeout');
})

new Promise(function(resolve) {
    console.log('promise');
}).then(function() {
    console.log('then');
})

console.log('console');




