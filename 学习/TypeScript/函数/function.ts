function add(x:number,y:number):number{
   return x+y;
}

let myAdd=function(x:number,y:number):number{return x+y;}

let myAdd2:(x:number,y:number)=>number=function(x:number,y:number):number{return x+y;}

let myAdd3:(base:number,increase:number)=>number=function(x,y){return x+y;}

// 可选参数
function build(firstName:string,lastName?:string){
    if(lastName){
        return firstName+''+lastName;
    }
    else
     return firstName;
}

// 剩余参数
function buildName(firstName:string,...restName:string[]){
    return firstName+' '+restName.join(' ');
}
let buildNameFun:(fname:string,...rest:string[])=>string=buildName;


// this参数  this被绑定在某个Deck对象上
interface Card{
    suit:string;
    card:number;
}
interface Deck{
    suits:string[];
    cards:number[];
    createCardPick(this:Deck):()=>Card
}
let deck:Deck={
    suits:['a','b'],
    cards:Array(52),
    createCardPick:function(this:Deck){
        return ()=>{
            let pickedCard=Math.floor(Math.random()*52);
            let pickedSuit=Math.floor(pickedCard/13)
            return {suit:this.suits[pickedSuit],card:pickedCard%13};
        }
    }
}
let cardPicker=deck.createCardPick();
let pickedCard=cardPicker();
console.log(pickedCard.card,pickedCard.suit);

// this在回调函数中
interface UIElement{
    addClickListener(onclick:(this:void,e:Event)=>void):void
}
class Handler{
    info:string;
    onClickGood(this:void,e:Event){
        console.log('clicked');
    };
    // onClickBad(this:Handler,e:Event){
    //     this.info=e.message
    // }
    // onClickGood2=(e:Event)=>{this.info=e.message}
}

