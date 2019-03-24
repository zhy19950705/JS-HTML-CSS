function identify<T>(arg:T):T{
    return arg;
}

 let output=identify<string>('myString')

//  类型推论，自动确定T的类型
 let output2=identify('myString')

 function loggingIdentity<T>(arg:T[]):T[]{
     console.log(arg.length);
     return arg;
 }

 function loggingIdentity2<T>(arg:Array<T>):Array<T>{
    console.log(arg.length);
    return arg;
 }

//  对象字面量作为接口
 interface GenericIdentityFn{
     <T>(arg:T):T
 }
 function identity<T>(arg:T):T{
     return arg;
 }
 let myIdentity:GenericIdentityFn=identity

//  泛型参数作为接口的参数
interface GenericIdentityFn2<T>{
   ( arg:T):T
}
function identity2<T>(arg:T):T{
    return arg;
}
let myIdentity2:GenericIdentityFn2<number>=identity2

// 泛型类
class GenericNumber<T>{
    zeroValue:T;
    add:(x:T,y:T)=>T
}
let myGenericNumber=new GenericNumber<number>()
myGenericNumber.zeroValue=0
myGenericNumber.add=function(x,y){return x+y;}

let stringNumeric=new GenericNumber<string>();
stringNumeric.zeroValue='';
stringNumeric.add=function(x,y){return x+y;}

// 泛型约束
interface LengthWise{
    length:number
}
function loggingIdentity3<T extends LengthWise>(arg:T):T{
    console.log(arg.length)
    return arg;
}

// 使用原型推断并约束构造函数与类实例的关系
class Animal{
    numLegs:number
}
class BeeKeeper{
    hasMask:boolean
}
class ZooKeeper{
    namTag:string
}
class Bee extends Animal{
    keeper:BeeKeeper
}
class Lion extends Animal{
    keeper:ZooKeeper
}
function createInstance<T extends Animal>(c:new ()=>T):T{
    return new c();
}
createInstance(Lion).keeper.namTag;  //typechecks 13282000705