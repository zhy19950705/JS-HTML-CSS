let suits=['hearts','clubs','diamond']

function pickCard(x:{suit:string,card:number}[]):number
function pickCard(x:number):{suit:string,card:number}

function pickCard(x):any{
    if(typeof x=='object'){
        let pickedCard=Math.floor(Math.random()*x.length)
        return pickCard
    }
    else if(typeof x=='number'){
        let pickedSuit=Math.floor(x/13);
        return {suit:suits[pickedSuit],card:x%13}
    }
}
let myDeck=[{suit:'diamonds',card:2},{suit:'spades',card:10}]
let pickedCard1=myDeck[pickCard(myDeck)]

let pickedCard2=pickCard(15)