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