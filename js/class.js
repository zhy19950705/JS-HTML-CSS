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
//es6
class Animal{
    constructor(name){
        this.name=name
    }
    eat(){
        console.log(`${this.name}eat`)
    }
}
//使用extends即可实现继承，更加符合经典面向对象语言的写法，如 Java
// 子类的constructor一定要执行super()，以调用父类的constructor
class Dog extends Animal{
    constructor(name){
        super(name)
        this.name=name
    }
    say(){
        console.log(`${this.name}啥样`)
    }
}
const dog2=new Dog('hasqi')
dog2.say()
dog2.eat()
