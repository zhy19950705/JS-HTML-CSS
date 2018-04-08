let obj={};
obj.toString() //[object Object]
// 即window.Object.prototype.toString.call(obj)
// obj._proto_=Obj.prototype
// prototype指向一块内存块，放着共同属性；_proto_指向同一个内存块

// 原型链obj._proto_._proto_找属性，读属性时沿着原型链搜索
// 新增属性时不会看原型链（给属性增加配置不一样）