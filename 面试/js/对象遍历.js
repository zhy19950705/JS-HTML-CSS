/* 
    1.for/in
    2.Object.keys(obj)
    3.Object.getOwnPropertyNames(obj)
    4.Object.getOwnPropertySymbols(obj)
    5.Reflect.ownKeys(obj)
*/
var parent = {};
Object.defineProperty(parent, {
    a:{
        value:1,
        writable: true,
        enumarable: true,
        configurable: true
    },
    b:{
        value:1,
        writable: true,
        enumarable: true,
        configurable: true
    },
    [Symbol('parent')]:{
        value:1,
        writable: true,
        enumarable: true,
        configurable: true
    }
})