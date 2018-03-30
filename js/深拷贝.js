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