//es6
class MathHandle{
    constructor(x,y){
        this.x=x;
        this.y=y
    }
    add(){
        return this.x+this.y
    }
}
const m=new MathHandle(1,2)
console.log(m.add())
//js
function mathHandle(x,y) {
    this.x=x;
    this.y=y
}
mathHandle.prototype.add=function () {
    return this.x+this.y
}
let n=new mathHandle(1,2)
console.log(n.add())


//js构造函数实现继承
function animal() {
    this.eat=function () {
        console.log('animal eat')
    }
}
function dog() {
    this.bark=function () {
        console.log('dog bark')
    }
}
dog.prototype=new animal()
let hashiqi=new dog()
hashiqi.bark()
hashiqi.eat()

// 在ES5中，继承实质上是子类先创建属于自己的this，
// 然后再将父类的方法添加到this（也就是使用Parent.apply(this)的方式）或者this.__proto__（即Child.prototype=new Parent()）上。
// 而在ES6中，则是先创建父类的实例对象this，然后再用子类的构造函数修改this。

//es6
class Animal{
    constructor(name){
        this.name=name
    }
    eat(){
        console.log(`${this.name}eat`)
    }
    static sayHello(){
        console.log('static say hello')
    }
}
//使用extends即可实现继承，更加符合经典面向对象语言的写法，如 Java
// 子类的constructor一定要执行super()，以调用父类的constructor,
// 因为子类没有自己的this对象，而是继承了父类的this对象而 对其进行加工
class Dog extends Animal{
    constructor(name){
        super(name)
        this.name=name
    }
    say(){
        console.log(`${this.name}啥样`)
        super.eat()
    }
    static sing(){
        super.sayHello();
        console.log('hello')
    }
}
const dog2=new Dog('hasqi')
dog2.say()
dog2.eat()
//class内部只允许定义方法，不允许定义属性（包括静态属性）
Dog.sing()
Dog.sayHello()
// Dog.eat()   //eat不是静态方法


// super本身指代的是父类的实例对象，我们可以使用super.的方式调用父对象的方法。
// 此外，由于对象总是继承于其它对象，所以可以在ES6的任何一个对象中使用super关键字。
let obj={
    arr:[1,2,3],
    toString(){
        console.log('super:'+super.toString.apply(this.arr))
    }
}
obj.toString()