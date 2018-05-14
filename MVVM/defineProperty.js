// 双向数据绑定通过数据劫持+发布订阅模式
let obj={};
let song='发如雪';
obj.singer='周杰伦';

Object.defineProperty(obj,'music',{
    // value:'七里香'
    configurable:true,
    // writable:true,
    enumerable:true,
    get(){
        return song;
    },
    set(val){
        song=val;
    }
})

console.log(obj)

delete obj.music;  // 如果想对obj里的属性进行删除，configurable要设为true  2
console.log(obj)

obj.music='听妈妈的话';  // 如果想对obj的属性进行修改，writable要设为true  3
console.log(obj)

for(let key in obj){
     // 默认情况下通过defineProperty定义的属性是不能被枚举(遍历)的
    // 需要设置enumerable为true才可以
    // 不然你是拿不到music这个属性的，你只能拿到singer
    console.log(key)  //singer,music
}

console.log(obj.music) //发如雪
obj.music='夜曲'  //set设置
console.log(obj.music)   //夜曲