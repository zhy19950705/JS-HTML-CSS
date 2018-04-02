function clone(obj) {
    if(!obj&&typeof obj!=='object'){
        return
    }
    let newObj={};
    for(let key in obj){
        newObj[key]=(obj[key]&&typeof obj[key]==='object')?clone(obj[key]):obj[key]
    }
    return newObj
}
let a={
    name:'zz',
    date:{
        name:'hh'
    }
}
let b=clone(a)
let c=a;
b.name='真真'
c.name='好好'
console.log(a,b,c)

//浅拷贝
Object.assign()

//深拷贝之后，改变其中的一个值，不会影响另外一个值。浅拷贝则会影响。
// 即浅拷贝只是拷贝了指向对象的指针。
//    而深拷贝则是完全拷贝了整个值，创建了一个新的和原对象值一样的对象

//1、遍历待拷贝对象  for...in 与hasOwnProperty进行联用
//2、判断每个元素是不是原始值，若是，则使用浅度克隆进行拷贝
//3、若是引用值，则需要判断是对象还是数组
//4、再分别建立空数组或对象用来盛放里面即将拷贝而来的属性值
//5、数组和对象里面的若是原始值，则浅拷贝即可实现，若还有引用值，则重复进行判断
function deepClone(origin,target) {
    let target=target||{},toStr=Object.prototype.toString(),arrStr='[object Array]';
    for(let prop in origin){
        if(origin.hasOwnProperty(prop)){
            if(typeof (prop)=='object'&&origin[prop]!==null){
                if(toStr.call(origin[prop])==arrStr){
                    target[prop]=[]
                }else{
                    target[prop]={}
                }
                deepClone(origin[prop],target[prop])
            }else{
                target[prop]=origin[prop]
            }
        }
    }
}