// Number,String,Boolean,Object,null,undefined,Symbol
typeof null===Object  

// 数组字符串键值被强制转换为十进制数字
var a=[];
a['13']=43;
a.length //14

// a.delete不能改变数组长度
let arr=[1,2,3]
let len=arr.length;
len=0;
let arr=Array.from({length:0})  //数组清空

// 借用数组非变更方法处理字符串
a='foo'
var c=Array.prototype.join.call(a,'-')  //'f-o-o'
var d=Array.prototype.map.call(a,function(v){
    return v.toUpperCase()+'.'
}).join('')  //'F.O.O'

// 反转字符串
a.split('').reverse().join('')

// Number
var b=43.33
b.toFixed(3)
(43.33).toFixed(3)
43..toFixed(3)

0.1+0.2===0.3 //false  0.30000000000000004   二进制浮点数中0.1和0.2并不是十分精确

// 特殊的数字
var c=3/'foo'  //NaN
typeof c==='number' //true
c == NaN //false
c === NaN //false
NaN!=NaN  //true


isNaN(c)  //true,然鹅存在严重缺陷
isNaN('foo') //true

// ES6开始可以使用Number.isNaN()
Number.isNaN(c) //true
// NaN是JavaScript中唯一一个不等于自身的值
if(!Number.isNaN){
    Number.isNaN=function(n){
        return n!==n
    }
}


// +0 -0
function isNegZero(n){
    n=Number(n);
    return (n===0)&&(1/n===-Infinity)
}
// -0的存在是为了防止变量失去符号位，丢失方向信息(比如移动的方向)

// 特殊等式ES6 判断绝对相等
let d=3/'foo'
let e=-3*0
Object.is(d,NaN) //true
Object.is(e,-0)  //true
Object.is(e,0)   //false

if(!Object.is){
    Object.is=function(v1,v2){
        if(v1===0&&v2===0){
            return 1/v1===1/v2
        }
        if(v1!==v1){
            return v2!==v2
        }
        return v1===v2
    }
}
// 能用==和===时尽量用，效率高
