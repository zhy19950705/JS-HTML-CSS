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
