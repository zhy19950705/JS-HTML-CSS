// 交叉类型  多合一
function extend<T,U>(first:T,second:U):T&U{
    let result=<T & U>{};
    for(let id in first){
        (<any>result)[id]=(<any>first)[id]
    }
    for(let id in second){
        if(!result.hasOwnProperty(id)){
            (<any>result)[id]=(<any>second)[id]
        }
    }
    return result;
}
class Person{
    constructor(public name:string){}
}
interface Loggable{
    log():void;
}
class ConsoleLoggger implements Loggable{
    log(){

    }
}
var jim=extend(new Person('hh'),new ConsoleLoggger());
var n=jim.name
jim.log()


// 联合类型 
function padLeft(value:string,padding:any){
    if(typeof padding==='number'){
        return Array(padding+1).join(' ')+value
    }
    if(typeof padding==='string'){
        return padding+value;
    }
    throw new Error (`expected string or number,got ${padding}`)
}
padLeft('hello hanhan',4)  //'     hello hanhan'

function padLeftTrue(value:string,padding:number|string){
    // ...
}

interface Bird{
    fly();
    layEggs()
}
interface Fish{
    swim();
    layEggs()
}
function getSmallPet():Fish|Bird{
    return ;
}
let pet=getSmallPet()
pet.layEggs()
// pet.swim()  //errors 只能访问联合类型共有的成员

if((<Fish>pet).swim){
    (<Fish>pet).swim()
}else{
    (<Bird>pet).fly()
}

// 类型谓词 paramterName is Type
function isFish(pet:Fish|Bird):pet is Fish{
    return (<Fish>pet).swim!==undefined;
}

if(isFish(pet)){
    pet.swim()
}else{
    pet.fly()
}

// typeof类型保护
function isNumber(x:any):x is number{
    return typeof x==='number';
}
function isString(x:any):x is string{
    return  typeof x==='string';
}
function padLeft2(value:string,padding:string|number){
    if(isNumber(padding)){
        return Array(padding+1).join(' ')+value;
    }
    if(isString(padding)){
        return padding+value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
function padLeft3(value:string,padding:number|string){
    if(typeof padding==='number'){

    }
    if(typeof padding==='string'){

    }
    throw new Error()
}

// instanceof类型保护  通过构造函数来细化类型的
interface Padder{
    getPaddingString()
}
class SpaceRepeatingPadder implements Padder{
    constructor(private numSpaces:number){};
    getPaddingString(){
        return Array(this.numSpaces+1).join(' ');
    }
}
class StringPadder implements Padder{
    constructor(private value:string){};
    getPaddingString(){
        return this.value;
    }
}
function getRandomPadder(){
    return Math.random()<0.5?new SpaceRepeatingPadder(4):new StringPadder(' ');
}
let padder:Padder=getRandomPadder()
if(padder instanceof SpaceRepeatingPadder){
    padder
}
if(padder instanceof StringPadder){
    padder
}

// 类型别名
type Name=string;
type NameResolve=()=>string;
type NameOrResolve=Name|NameResolve;
function getName(n:NameOrResolve):Name{
    if(typeof n==='string'){
        return n;
    }else{
        return n();
    }
}

// 可辨识联合
interface Square{
    kind:'square',
    size:number
}
interface Rectangle{
    kind:'rectangle',
    width:number,
    height:number
}
interface Circle{
    kind:'circle',
    radius:number
}
type Shape=Square|Rectangle|Circle
function area(s:Shape):number|undefined{
    switch(s.kind){
        case 'square':return s.size*s.size;
        case 'rectangle':return s.height*s.width;
        case 'circle':return s.radius*s.radius*Math.PI;
    }
}

// 多态的this类型
class BasicCalculator{
    public constructor(protected value:number=0){};
    public currentValue():number{
        return this.value;
    }
    public add(operand:number):this{
        this.value+=operand
        return this;
    }
    public multiply(operand:number):this{
        this.value*=operand;
        return this;
    }
}
let v=new  BasicCalculator(2)
       .add(3)
       .multiply(4)
       .currentValue()
       
// 继承保持接口连贯性
class ScientificCalculator extends BasicCalculator{
    public constructor(value=0){
        super(value)
    }
    public sin(){
        this.value=Math.sin(this.value);
        return this;
    }
}
let m=new ScientificCalculator(3).sin().add(2).multiply(4).currentValue()

// 索引类型   keyof T索引类型查询操作符
// T[K]索引访问操作符
function pluck(o,names){
    return names.map(n=>o[n]);
}
function pluck2<T,K extends keyof T>(o:T,names:K[]):T[K][]{
    return names.map(n=>o[n]);
}
interface Person{
    name:string,
    age:number
}
let personProps:keyof Person
let person:Person={
    name:'hanhan',
    age:23
}
let strings:string[]=pluck(person,['name'])  //ok,string[]
function getProperty<T,K extends keyof T>(o:T,name:K):T[K]{
    return o[name];
}
let name2:string=getProperty(person,'name')
let age2:number=getProperty(person,'age')

interface Map2<T>{
  [key:string]:T;
}
let keys:keyof Map2<number>  //number
let value:Map2<number>['foo']  //string