// 简单值总是通过值复制的方式来传递，包括null,undefined,字符串，数字，boolean,symbol
var c=[1,2,3]
var d=c;
d.push(4)  
c  //[1,2,3,4]
d  //[1,2,3,4]

// 复合值--对象（包括数组和封装对象）和函数，总是通过引用复制的方式来赋值/传递
var a=[1,2,3];
var b=a;
b=[4,5,6]
a //[1,2,3]
b //[4,5,6]


function foo(x){
    x.push(4);

    x=[4,5,6];
    x.push[7]
}
foo(a)  //[1,2,3,4]

function foo(){
    x.push(4)

    x.length=0;
    x.push(4,5,6,7)
}
foo(a) //[4,5,6,7]
// 无法决定使用值复制还是引用复制，一切由值的类型决定

