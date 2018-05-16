let name="hh";
let obj={
    name:'张晗宇',
    showName:function () {
        console.log(this.name)
    },
    returnName:function () {
        return this.name
    },
    returnFunctionName:function () {
        return function () {
            console.log(this.name)
        }
    }
};
obj.showName();
console.log(obj.returnName());
console.log(obj.returnFunctionName()());
obj.showName.call(name);
console.log(obj.returnName.call(name));
obj.returnFunctionName.call(name);

// let newObj=obj.returnFunctionName().bind(window);
// newObj.call(obj)


let big='a';
let obj2={
    big:'b',
    showBig:function () {
        return this.big
    }
};
console.log(obj2.showBig.call(big))

//let self=this    self是一个通过词法作用域和闭包进行引用的标识符， 不关心this绑定过程中发生了声明
let obj1={
    count:0,
    cool:function coolFn() {
        if(this.count<1){
            let self=this;
            setTimeout(function timer() {
                self.count++
                console.log(self.count)
            },100)
        }
    }
}
obj1.cool()

//箭头函数涉及this绑定时，放弃普通this绑定规则，使用当前的词法作用域覆盖this本来的值
//继承cool函数的this绑定
let obj3={
    count:1,
    cool:function coolFn() {
        if(this.count<1){
            setTimeout(()=>{
                this.count++
                console.log(this.count)
            })
        }
    }
}
obj3.cool()

let obj4={
    count:0,
    cool:function coolFn() {
        if(this.count<1){
            setTimeout(function timer() {
                  this.count++;
                  console.log(this.count)
                }.bind(this),100
            )
        }
    }
}
obj4.cool()

var length=10;
function fn(){
    console.log(this.length)
}
var obj={
  length:5,
  method:function(fn){
      fn();
      arguments[0]()
  }
}
obj.method(fn,1)  //10,2

// 箭头函数this
// 所谓的定义时候绑定，就是this是继承自父执行上下文！！中的this，
// 比如这里的箭头函数中的this.x，箭头函数本身与say平级以key:value的形式，
// 也就是箭头函数本身所在的对象为obj，而obj的父执行上下文就是window，
// 因此这里的this.x实际上表示的是window.x，因此输出的是11。
// (this只有在函数被调用，或者通过构造函数new Object()的形式才会有this)
var x=11;
var obj={
    x:22,
    // say:function(){
    //     console.log(this.x)  //22
    // }
    say:()=>{
        console.log(this.x) //11
    }
}
obj.say()