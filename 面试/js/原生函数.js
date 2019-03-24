// Number(),Boolean(),String(),Array(),Object(),Function(),RegExp(),Date(),Error(),Symbol()
var a=new String('abc')  //创建封装了基本类型的封装对象
typeof a  // "object"
a instanceof String // true
Object.prototype.toString.call(a)  // [object String]

// Null()和Undefined()这样的构造函数不存在
Object.prototype.toString.call(null)  //[object Null]
Object.prototype.toString.call(uundefined) //[object Undefined] 

var b=new Array(3) //[undefined*3]  里面没有单元，不能使用b.map()
b.length //3
b=[undefined,undefined,undefined]  //[undefined,undefined,undefined] 可以使用b.map()
b=[] 
b.length=3 //[undefined*3]

// 原生原型 存在的问题
typeof Function.prototype //'function'
Function.prototype()  // 空函数

RegExp.prototype.toString()  // '/(?:)/'
'abc'.match(RegExp.prototype)  // ['']

Array.isArray(Array.prototype);  //true
Array.prototype.push(1,2,3)  //3
Array.prototype  //[1,2,3]

























































