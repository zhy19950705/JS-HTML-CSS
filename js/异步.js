// let a=true
// setTimeout(()=>{
//     a=false
// },100)
// //死循环
// while (a){
//     console.log('while')
// }

setTimeout(function() {
    console.log('setTimeout');
})

new Promise(function(resolve) {
    console.log('promise');
}).then(function() {
    console.log('then');
})

console.log('console');




