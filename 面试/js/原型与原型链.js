//函数对象
// 所有引用类型(函数，数组，对象)都拥有_proto_属性(隐式原型)
// 所有函数都有prototype属性(显示原型)
//原型对象：拥有prototype属性的对象，在定义函数时就被创建

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


// 原型继承的 缺点
function Shape(){}
function Rect(){}
Rect.prototype=new Shape()  //父类实例属性为引用类型时，不恰当地修改会导致所有子类被修改
Rect.prototype=Shape.prototype  //父类构造函数原型与子类相同。修改子类原型添加方法会修改父类
Rect.prototype=Object.create(Shape.prototype)
Rect.prototype.area=function(){

}//兼容性

// 改进
function Rect(){
    Shape.call(this)
}//在子类构造函数中调用父类构造函数实现实例属性初始化
Rect.prototype.constructor=Rect; //新创建的对象替代子类默认原型
function create(obj){
    if(Object.create){
        return Object.create(obj)
    }
    function f(){}
    f.prototype=obj
    return new f()
}

