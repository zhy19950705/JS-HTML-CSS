Function.prototype.bind=(that,...argv)=>{
    if(typeof this !== 'function'){
        throw new TypeError(`${this} is not callable`)
    }
    // 保存原函数
    let self=this;
    // 获取 bind后函数传入的参数
    return (...argu)=>{
        return self.apply(that,[...argv,...argu])
    }
}
let fun1=function(a,b,c){
    console.log(this)
    console.log([a,b,c])
}.bind(obj,1,2)

fun1(3)  //[1,2,3]

// 通过直接赋值的效果
Function.prototype.bind = function(that, ...argv) {
    if (typeof this !== 'function') {
      throw new TypeError(`${this} is not callable`);
    }
    // 保存原函数
    let self = this;
    let func = function() {};
    // 获取bind后函数传入的参数
    let bindfunc = function(...arguments) {
      return self.apply(this instanceof func ? this : that, [...argv, ...arguments]);
    };
    // 把this原型上的东西挂载到func原型上面
    // func.prototype = self.prototype;
    // 为了避免func影响到this，通过new 操作符进行复制原型上面的东西
    bindfunc.prototype = self.prototype;
  
    return bindfunc;
  };
  
  function bar() {
    console.log(this.ll);
    console.log([...arguments]);
  }
  let func3 = bar.bind(null);
  
  func3.prototype.value = 1;
  
  console.log(bar.prototype.value) // 1    可以看到bind后的原型对bind前的原型产生的同样的影响


  //   通过继承赋值的效果
  Function.prototype.bind = function(that, ...argv) {
    if (typeof this !== 'function') {
      throw new TypeError(`${this} is not callable`);
    }
    // 保存原函数
    let self = this;
    let func = function() {};
    // 获取bind后函数传入的参数
    let bindfunc = function(...argu) {
      return self.apply(this instanceof func ? this : that, [...argv, ...argu]);
    };
    // 把this原型上的东西挂载到func原型上面
    func.prototype = self.prototype;
    // 为了避免func影响到this，通过new 操作符进行复制原型上面的东西
    bindfunc.prototype = new func();
  
    return bindfunc;
  };
  
  function bar() {
    console.log(this.ll);
    console.log([...arguments]);
  }
  let func3 = bar.bind(null);
  
  func3.prototype.value = 1;
  
  console.log(bar.prototype.value) // undefined   可以看到bind后的原型对bind前的原型不产生影响
  
  func3(5);     // seve
                // [ 5 ]
  new func3(5); // undefined
                // [ 5 ]
  