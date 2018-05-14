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
    count:0,
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