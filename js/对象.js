//字面形式
var a={}
// 构造形式
var a=new Array()

var prefix='foo';

// es6可计算属性名
var myObject={
    [prefix+'bar']:'foobar',
    [prefix+'baz']:'foobaz'
}

// 键访问可以接受任意UTF8/Unicode字符串作为属性名，会转换为string
myObject.prefixbar //foobar
myObject[[prefix+'bar']] //foobar  
myObject['foobar'] //foobar  

// es5开始 属性描述符
Object.defineProperty(myObject,"a",{
    value:2,
    writable:true,
    configurable:true,
    enumerable:true
})
// 对象常量
Object.defineProperties(myObject,'b',{
    value:42,
    writable:false,
    configurable:false
})


// [[Get]]
var myObject={
    a:undefined
}
myObject.a  //undefined
myObject.b  //undefined

//访问描述符getter、setter,会忽略value,writable特性
//只定义getter
var myObject={
    get a() {
        return 2
    }
}
myObject.a=3
myObject.a  //2

var myObject={
    get a(){
        return this._a_
    },
    set a(val){
        this._a_=val*2
    }
}
myObject.a=2;
myObject.a  //4

// 存在性
var myObject={
    a:2
}

("a" in myObject) //true,对象及原型链，检查的是属性名
("b" in myObject) //false

myObject.hasOwnProperty("a") //true，只检查对象
myObject.hasOwnProperty('b') //false

// 有的对象没有连接到Object.prototype
Object.prototype.hasOwnProperty.call(myObject,'a')

// for...of 迭代属性,首先向访问对象请求有个迭代器对象，然后通过调用迭代器对象的next方法遍历所有返回值
// 数组内置@@iterator来手动遍历，使用Symbol.iterator获取对象的@@iterator内部属性，@itterator是一个返回迭代器对象的函数
// 普通对象没有内置@iterator，无法自动完成for...of遍历
var myArr=[1,2,3];
var it=myArr[Symbol.iterator]
it.next()  //{value:1,done:false}
it.next()  //{value:2,done:false}
it.next()  //{value:3,done:false}
it.next()  //{done:true}

//for...in如果属性是不可枚举emurable:false，不会在循环中


