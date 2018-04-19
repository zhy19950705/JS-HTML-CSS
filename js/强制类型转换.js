var a=42;
var b=a+'';   //隐式强制类型转换
var c=String(a)  //显式强制类型转换

// 字符串、数字、布尔值和null的JSON.stringfy()规则基本与toString相同

// 假值
false,null,undefined,NaN,+0,-0

~x  //-(x+1)

// 解析和转换,转换不允许出现非数字字符，解析按从左到右
var a='42'
var b='42px'
Number(a) //42
parseInt(a) //42
Number(b) //NaN
parseInt(b) //42

parseInt(0.000008) //0 0~0.000008
parseInt(0.0000008) //8  8~8e-7
parseInt(false,16)  //250  fa~false
parseInt(parseInt,16) //15  f~function..

// 使用Boolean(a)和!!a进行显式强制类型转换，少用三元运算符
var b=a?true:false

// 隐式强制类型转换
var a=[1,2]
var b=[3,4]
a+b //"1,23,4"

[]+{} //[object Object]
{}+[] //0


// 判断是否有且仅有一个参数为true
function onlyOne(){
    var sum=0;
    // arguments.reduce(sum,e=>{
    //     if(e){
    //        sum+=e
    //     }
    // }) 
    // return sum==1
    for(let i=0;i<arguments.length;i++){
        // if(arguments[i]){
        //     sum+=arguments[i]
        // }
        sum+=Number(!!arguments[i])   //显式强制类型转换
    }
    return sum==1
}

// 隐式强制类型转换为布尔值
// if(a){}
// for(..;..;..)
// while(..)  do..while(..)
// ?:
// || &&返回值不一定是布尔类型，而是两个操作数其中一个的值

var a=42;
var b='abc';
var c=null;
a||b //42    a?a:b
a&&b //'abc'  a?b:a
c||a //42
c&&a //null

function foo(a,b){
    a=a||'hello';
    b=b||' world';
    return a+b
}

foo('that is','')  //that is world