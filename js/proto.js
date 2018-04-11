let obj={};
obj.toString() //[object Object]
// 即window.Object.prototype.toString.call(obj)
// obj._proto_=Obj.prototype
// prototype指向一块内存块，放着共同属性；_proto_指向同一个内存块

// 原型链obj._proto_._proto_找属性，读属性时沿着原型链搜索
// 新增属性时不会看原型链（给属性增加配置不一样）

function Foo(name){
    this.name=name;
}
Foo.prototype.myName=function(){
    return this.name
}
function Bar(name,label){
    Foo.call(this);
    this.label=label
}

// ES6之前创建一个新的Bar.prototype对象并把他关联到Foo.prototype
Bar.prototype=Object.create(Foo.prototype)
// ES6开始直接修改Bar.prototype
Object.setPrototypeOf(Bar.prototype,Foo.prototype)

Bar.prototype.myLabel=function(){
    return this.label
}

var a=new Bar()

// 在a的整条[[prototype]]链中是否出现过Foo.prototype
Foo.prototype.isPrototypeOf(a)  //true
// b是否在c的[[Prototype]]链中
b.isPrototypeOf(c)
//获取对象的[[Prototype]]链
Object.getPrototypeOf(a)
Object.getPrototypeOf(a)===Foo.prototype; //true

a._proto_=Foo.prototype
// ._proto_的实现
Object.defineProperties(Object.prototype,'_proto_',{
    get:function(){
        return Object.getPrototypeOf(this)
    },
    set:function(o){
        Object.setPrototypeOf(this,o);
        return o
    }
})