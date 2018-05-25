enum Choose {Wife=1,Mother=2}

function question(choose:Choose):void{
    console.log('你妈妈和老婆同时掉水里你先救哪个');
    console.log('你的选择是'+choose)
}
question(Choose.Mother)

class Person {
    name:string;
    age:number;
    labels:Array<string>;
    wives:string[];
    contact:[string,number];
    other:any;
    saveMother:boolean=true;
    constructor(){}
    answer():Choose{
      if(this.saveMother===false){
         return Choose.Wife
      }
      return  Choose.Mother
    }
    hello():void{
        console.log(`hello${this.name}`)
    }
    empty(){}
    down():never{
        while(true){

        }
    }
}

let hanhan=new Person();

hanhan.name='张晗晗';
hanhan.age=28;
hanhan.labels=['颜值逆天','年轻多金'];
hanhan.wives=['1号','2号','3号'];
hanhan.contact=['北京3环',159];
hanhan.saveMother=false;
hanhan.other='不好不坏的人';

let len=(<string>hanhan.other).length

console.log(len)

hanhan.hello()

console.log(hanhan.empty())

// 定义变量
let tt=new Person()

// 定义常量
const PI='3.1415926';

// 声明类型
let word:string='how';

// 类型转换
<string>tt.other;
tt.other as string

// 变量解构
let [a,b,c]=[2,8,16]
console.log(a,b,c)

let [,,Alex]=[2,8,16]  
let [Jack,...X]=[2,4,6,8]
console.log(Alex)  //16
console.log(...X)  //[4,6,8]

let {a1,...b1}={a1:'string a',b1:'string b1',c1:'string c1'}
console.log(a1)
console.log(b1)

let {a2:x,...b2}={a2:'string a2',b2:'string b2',c2:'string c2'}
console.info(x)
console.log(b2)

function someFuc({a3:x,...b3}={a3:'string a3',b3:'string b3',c3:'string c3'}):void{
  console.log(x)
  console.log(b3)
}

function someFunc({a4:x,...b4}){
    console.log(x)
    console.log(b4)
}
someFunc({a4:'string a4',b4:'string b4',c4:'string c4'})