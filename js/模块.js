//模块的两个特征：1 为创建内部作用域而调用了一个包装函数
// 2 包装函数的返回值至少包括一个对内部函数的引用，这样就会创建涵盖整个包装函数内部作用域的闭包

// 命名将要作为公共api返回的对象
var foo=(function CoolModule(id){
    function change(id){
       publicApi.identify=identify2
    }
    function identify1(){
        console.log(id)
    }
    function identify2(){
        console.log(id.toUpperCase())
    }
    var publicApi={
        change:change,
        identify:identify1
    }
    return publicApi
})('foo module')
foo.identify();  //foo module
foo.change();
foo.identify() //FOO MODULE

// 现代的模块机制
var myModules=(function Manager(){
    let modules={};
    function define(name,deps,impl){
        for(let i=0;i<deps.length;i++){
            deps[i]=modules[deps[i]]
        }
        // func.apply(thisArg, [argsArray])
        modules[name]=impl.apply(impl,deps)
    }
    function get(name){
        return modules[name]
    }
    return {
        define:define,
        get:get
    }
})()
myModules.define('bar',[],function(){
    function hello(who){
        return "hello"+who
    }
    return {
        hello:hello
    }
})
myModules.define('foo',['bar'],function(bar){
    let hungry='hippo'
    function awesome(){
      console.log(bar.hello(hungry).toUpperCase())
    }
    return {
        awesome:awesome
    }
})
let bar=myModules.get('bar')
let foo=myModules.get('foo')

bar.hello('hh')  //hello hh
foo.awesome()  //HELLOW HIPPO