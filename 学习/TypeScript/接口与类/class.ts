interface Db{
    host:string;
    port:number;
}

class MySQL implements Db {
    host:string;
    port:number;

    constructor(host:string,port:number){
        this.host=host;
        this.port=port;
        console.log(`正在连接${this.host}:${this.port}`)
    }
}

let mySQL=new MySQL('localhost',8080)

// 属性修饰符  readolny
interface Person2{
    readonly  IdCard:string;
}

let ro:ReadonlyArray<number>

class Person2 implements Person2{
   readonly IdCard:string='4214145654';
   constructor(){}
}

let person3:Person2={IdCard:'46666'}

// private protect
class Dad{
    protected username;
    private private_money;
    public public_something;
    default_something;
    constructor(){}
}

class Son extends Dad {
    constructor(){
        super()
    }
}

let d=new Dad();
d.public_something='something';
d.default_something='default_thing';

let s=new Son();

// 可选属性
interface Person4{
    name?:string
}
let a4:Person4={}

//可以添加属性的interface  
interface Person5{
    readonly IdCard:string;
    name?:string;
    [propName:string]:any
}

let person:Person5={IdCard:'43566'}

function getPerson(p:Person5){
    console.log(p)
}

// []限定属性名的类型，any限定属性值的类型
getPerson({IdCard:'s',0:2,some:'a22'})

interface Person6{
    [propName:number]:any
}

function getPerson2(p:Person6){
   
}
// 数字可以转换成文字，文字不一定能转成数字
// getPerson2({0:2,some:'22'})

// 描述函数
interface Db{
    host:string;
    port:number;
}

interface InitFunc{
    (options:Db):string
}
