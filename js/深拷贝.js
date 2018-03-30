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