// 布尔值
let isDone:boolean=true;

// 数字
let decLiteral:number=6;
let hexLiteral:number=0xf00d;
let binaryLiteral:number=0b1010;
let octalLiteral:number=0o744;

// 字符串
let name2:string='bob'
name2='smith'

// 数组
let list:number[]=[1,2,3]
let list2:Array<string>=['1','2','3']

// 元组
let x1:[string,number]=['1',2];

console.log(x1[0].substr(1))  //ok

x1[3]='world'  //true
x1[6]=true //false

// 枚举
enum Color {red,green,blue}
let c1:Color=Color.red //0

enum Color2 {red=1,green,blue} //递增
enum Color3 {red=1,green=3,blue=5}

// 可以由枚举的值得到它的名字
let colorName:string=Color2[2] //green


// Any
let notSure:any=4
notSure='dd'
notSure=true
notSure.ifExists()  //okay
notSure.toFixed()  //okay
//只是允许赋任意值
let prettySure:Object=4
prettySure.toFixed()  //error

let list3:any[]=[1,true,'free']
list3[1]=100

// void 表示没有任何类型+
function warnUser():void{
    console.log('nothing');   
}

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable:void=null

// Null和undefined
let u:undefined=undefined
let n:null=null
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// 指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自


// Never never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
function error(message:string):never{
    throw new Error)message
}//返回never的函数必须存在无法达到的终点
function fail(){
    return error('something failed');
}//推断的返回值类型为never
function infiniteLoop():never{
    while(true){

    }
}//返回never的函数必须存在无法达到的终点

// 类型断言
let someValue:any='this is a string';
let strLength:number=(<string>someValue).length

let strLength2:number=(someValue as string).length