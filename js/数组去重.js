(function(arr){
    console.log(...(new Set(arr)))
})([1,2,3,1,'1','2'])

// 遍历，将数组的值添加到一个对象的属性名里，
// 并给属性赋值，对象不能添加相同属性名，以这个为依据可以实现数组去重，
// 然后用Object.keys(对象)返回这个对象可枚举属性组成的数组，这个数组就是去重后的数组。
let a=['1', '2', '3', 1,NaN,NaN,undefined,undefined,null,null, 'a', 'b', 'b']
const unique=arr=>{
    let obj={};
    arr.forEach(value=>{
        obj[value]=0
    })
    return Object.keys(obj)  //返回这个对象可枚举属性组成的数组，这个数组就是去重后的数组
}
unique(a)
// 这个方法会将number,NaN,undefined,null，变为字符串形式，因为对象的属性名就是一个字符串，
console.log(...(new Set([1,1,1,2])))