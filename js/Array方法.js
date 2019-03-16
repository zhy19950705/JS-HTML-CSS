let a = [];

a.push(1);
a.pop();
a.shift();
a.unshift(2);
a.splice(1,2,3,4);
a.sort([1,23,3])


/* 统计字符串中每个字符出现的次数 */
const str = 'adfasd324sdf';
const obj = {};
str.split('').forEach(item=>{
    obj[str]?obj[str]++:obj[str]=1
})

/* 使用reduce */
const obj2 = {}
Array.from(str).reduce((accumulator,current)=>{
   current in accumulator?accumulator[current]++:accumulator[current]=1
},obj2)

console.log(obj2)