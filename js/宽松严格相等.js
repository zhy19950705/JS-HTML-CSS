// ==允许在相等比较中进行强制类型转换，而===不允许
// 如果两个值类型不同，就须臾考虑有没有强制类型转换的必要，有就用==，没有就用===，不在乎性能


1=='1' //true 字符串转换为数字
1==='1' //false

// 在比较对象时，==和===工作原理一样

//抽象相等 
// 字符串转换为数字
// 布尔值转换为数字 
// 在==中null和undefined相等
// 对象转换为数字 toPromitive(toString(),valueOf())

var a='42';
//if最右写法
if(!!a){

}
if(Boolean(a)){

}

undefined==null  //true
null==false  //false
undefined==false  //false
null==''  //false
null==0  //false

var a='abc';
var b=Object(a)
a==b //true
// null和nudefined不能被封装
var a=null;
var b=Object(a)  
a==b //false

var c=undefined;
var d=Object(c)
c==d //false

var e=NaN;
var f=Object(f)
e==f //false NaN!=NaN

// strange phenomenon
var i=2;
Number.prototype.valueOf=function(){
    return i++
}
var a=new Number(2);
if(a==2&&a==3&a==4){
    console.log('true')
}//a.valueOf()每次调用产生副作用

[]==![]  //true  同时翻转奇偶校验位[]==false    

// 如果两边的值中有true或者false，千万不要使用==
// 如果两边的值中有[],'',或者0，尽量不要使用==

// 绝对安全的强制类型转换
typeof x=='function'

var a={b:42}
var b={b:42};

a<b ; //false
a==b; //false
a>b; //false

a<=b //true !(a>b)
a>=b //true !(a<b)