//this的绑定和函数的声明的位置没有任何的关系，只取决于函数的调用方式。
//当一个函数被调用的时候，会创建一个活动记录(执行上下文)，this记录其中的一个属性，会在函数执行的过程中用到
// 每个函数的this是在调用时被绑定的，完全取决于函数的调用位置
// 严格模式 下全局对象将无法使用默认绑定，因此会绑定到undefined

// func(p1,p2)等价于func.call(undefined,p1,p2)
// obj.child.method(p1,p2)等价于obj.child.method.call(obj.child,p1,p2)
//func.call(context,p1,p2) context即this
//this就是call一个函数时，传入的第一个参数


function foo() {
    // console.log(this)
    setTimeout(() => this.a = 1,0)
    console.log( this.a );
}
function doFoo(fn) {
    // console.log(this)
    this.a = 4
    fn();
}
var obj = {
    a: 2,
    foo: foo
};
var a =3
doFoo( obj.foo ); // 4
setTimeout(obj.foo,0) // undefined

function test1() {
    // console.log(this)
    this.a=22;
    let b=function () {
        // console.log(this)
        console.log(this.a)
    }
    b()
}
var x=new test1()

//用new构造指向新对象
function A() {
    this.a=3;
    this.callA=function () {
        console.log(this)
        console.log(this.a)
    }
}
A()//undefined
var a=new A();
a.callA()//3,callA被保存在new A返回的对象中

//apply,call,bind
function f() {
    console.log(this.a)
}

f.call(obj)//2
f.apply(obj)//2
function s(something) {
    console.log(this.a,something);
    return this.a+something
}
var bar=s.bind(obj)//2,3
var b=bar(3)

function foo2() {
    // console.log(this)
    this.count++
}
// foo2.count=0  //count成为全局变量
foo2()

//1、 默认绑定
function m(){
    // 调用栈m,调用位置全局作用域
    console.log(this.a)
}
// 等于m.call(window)
m()//window
//2、 隐式绑定
function n(){
    console.log(this.a)
}
var n1={
    a:1,
    n:n
}
var n2={
    a:2,
    n1:n1
}
//对象属性链中只有最顶层或最后一层会影响调用位置 n2.n1.n.call(n1)
n2.n1.n();//n1  1

var gg=n1.n  //函数别名！引用的是函数本身，造成隐式丢失
gg()  //3

// 函数传递也是隐式赋值
function doFoo(fn){
    //fn其实引用的是n
   fn
}
doFoo(n1.n)  //3

//3、显示绑定
foo.call(obj)
//硬绑定
var dd=function(){
    foo.call(obj)
}
dd()   //2
setTimeout(dd,100)  //2

//4、new 绑定
function NewFoo(a) {
    this.a=a
}
var newBar=new NewFoo(2);
console.log(newBar.a) //2