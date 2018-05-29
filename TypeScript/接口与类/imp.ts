interface pointer2d{
    x:number;
    y:number
}

interface pointer3d extends pointer2d{
    z:number
}

function somfunc1({x=0,y=0}:pointer2d){

}

function somfunc2({x,y,z}:pointer3d){

}

interface Label{
    label:string;
}
function label(labelObj:Label){
   console.log(labelObj.label);
}

let myLabel={size:10,label:'hh'}
label(myLabel)
label({label:'hh'})

// 可选属性
interface SquareConfig {
    color?:string;
    width?:number;
}
function createSquare(config:SquareConfig):{color:string,area:number}{
    let newSquare={color:'red',area:100};
    if(config.color){
        newSquare.color=config.color
    }
    if(config.width){
        newSquare.area=config.width*config.width
    }
    return newSquare;
}
createSquare({color:'green'})

// 索引签名
interface SquareConfig2{
    color?:string;
    width?:number;
    [propName:string]:any;
}

// 函数类型  除了描述带有属性的普通对象外，接口也可以描述函数类型。
interface  SearchFun{
    (source:string,subString:string):boolean
}
let mySearch:SearchFun;
mySearch=function(source:string,subString:string){
    let result=source.search(subString)
    return result>-1
}
// 函数的参数名不需要相匹配
mySearch=function(src:string,sub:string){
    let result=src.search(sub)
    return result>-1;
}
// 可以省略类型
mySearch=function(src,sub){
    return src.search(sub)>-1;
}


// 接口描述可索引的类型 ，比如a[10] a["hh"] 字符串和数字
interface StringArray {
    [index:number]:string
}
let myArray:StringArray
myArray=["bob",'hh']
let myStr:string=myArray[0]

// 数字索引的返回值必须是字符串索引返回值类型的值类型
class Animal {
    name:string
}
class Dog extends Animal {
    breed:string;
}
interface NotOkay{
    // [x:number]:Animal;
    [x:string]:Dog;
}//number会转化成string，得到两种animal

interface NumberDictionary{
    [index:string]:number;
    length:number;
    // name:string;
}

interface ReadOnlyStringArray{
    readonly [index:number]:string
}
let myArray2:ReadOnlyStringArray=['alice','bob']
// myArray2[2]='mm'  //索引签名仅允许读取

// 类类型
interface ClockInterface{
  currentTime:Date;
  setTime(d:Date)
}
class Clock implements ClockInterface{
    currentTime:Date;
    setTime(d:Date){
        this.currentTime=d
    }
    constructor(h:number,m:number){}
}

// 类静态部分与实例部分的区别
interface ClockConstructor1{
    new (hour:number)
}

// class Clock2 implements ClockConstructor{
//     currentTime:Date;  //实例部分
//    constructor(h:number){} //静态部分   实现接口时不检查
// }

// 直接操作类的静态部分
interface ClockConstructor2{
    new (hour:number,minute:number):ClockInterface2;
}
interface ClockInterface2{
    tick()
}
function createClock(ctor:ClockConstructor2,hour:number,minute:number):ClockInterface2{
    return new ctor(hour,minute)
}
class DigitalClock implements ClockInterface2{
    tick(){console.log('beep')};
    constructor(hour:number,minute:number){}
}
class AnalogClock implements ClockInterface2{
    tick(){console.log('tick') };
    constructor(hour:number,minute:number){}
}
let digital=createClock(DigitalClock,12,17)
let analog=createClock(AnalogClock,7,39)


// 继承接口
interface Shape{
    color:string
}
interface Square extends Shape{
    sideLength:number
}
let square=<Square>{}
square.color='green';
square.sideLength=1

// 多继承
interface PenStroke{
    penWidth:number
}
interface Square2 extends Shape,PenStroke{
    sideLength:number
}
let square2=<Square2>{}
square2.color='red';
square2.penWidth=2;
square2.sideLength=2;

// 混合类型  一个对象可以同时作为函数和对象
interface Counter{
    (start:number):string;
    interval:number;
    reset()
}
function getCounter():Counter{
    let counter=<Counter>function(start:number){};
    counter.interval=123;
    counter.reset=function(){}
    return counter;
}
let c=getCounter();
c(10)
c.reset()
c.interval=5

// 接口继承类
class Control{
    private state:any;
}
interface SelectableControl extends Control{
    select():void
}
class Button extends Control implements SelectableControl{
    select(){}
}
class TextBox extends Control{
    select(){}
}
// class Image implements SelectableControl{
//   缺少stete属性
// }



