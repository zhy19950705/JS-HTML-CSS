interface Named{
    name:string
}
let x:Named;
let y={name:'hanhan',age:22}
x=y;  //true  只有目标类型name会被检查是否兼容

function greet(n:Named){
    console.log(n.name);
}
greet(y)

let x1=(a:number)=>0
let y1=(b:number,s:string)=>0

y1=x1  //ok
// x1=y1  //error

// 忽略参数
let items=[1,2,3]
items.forEach((item,index,array)=>{
    console.log(item);
})

// 返回值不同的函数  返回值不能忽略
let x2=()=>({name:'hh'})
let y2=()=>({name:'hh',age:23})

x2=y2  //ok
// y2=x2;  //error


// 函数参数双向协变
enum EventType {Mouse,Keyboard}
interface Event {timestamp:number}
interface MouseEvent extends Event{x3:number,y3:number}
interface KeyEvent extends Event{keyCode:number}

function listenEvent(eventType:EventType,handler:(n:Event)=>void){

}

listenEvent(EventType.Mouse,(e:MouseEvent)=>console.log(e.x,e.y))

listenEvent(EventType.Mouse,(e:Event)=>console.log((<MouseEvent>e).x,(<MouseEvent>e).y))

listenEvent(EventType.Mouse,<(e:Event)=>void>((e:MouseEvent)=>console.log(e.x,e.y)))

// 数字类型与枚举类型兼容，不同枚举类型之间不兼容
enum Status {Ready,Waiting}
enum Color {Red,Blue,Green}
let status1=Status.Ready
// status1=Color.Red

// 比较两个类类型的对象，只有实例的成员会被比较
class Animal{
    feet:number;
    constructor(){}
}
class Size{
    feet:number;
    constructor(numFeet:number){}
}
let a:Animal;
let b:Size;
a=b  //ok
b=a //ok

// 泛型
interface Empty<T>{

}
let x4:Empty<string>
let y4:Empty<number>
x4=y4  //ok any类型比较

interface NotEmpty<T>{
    data:T
}
let x5:NotEmpty<string>
let y5:NotEmpty<number>
// x5=y5 