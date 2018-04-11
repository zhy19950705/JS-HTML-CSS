// 1、解决回调地狱
getData(function(a){
    getMoreData(a,function(b){
        getMoreData(b,function(c){
            // ...
        })
    })
})
function getData(){
    return new Promise(function(resolve,reject){
        resolve(1)
    })
}
function getMoreData(arg){
    return new Promise(function(resovle,reject){
        resolve(arg+10)
    })
}
getData().then(function(a){
    console.log(a);
    return getMoreData(a)
}).then(function(b){
    console.log(b);
})
// 简化
getData().then(a=>getMoreData(a)).then(b=>console.log(b))

// 2、Promise可以在多个请求发送完成后，再得到或者处理某个结果
let fs=require('fs')
function read(url){
    return new Promise(function(resolve,reject){
        fs.readFile(url,'utf8',function(err,data){
            if(err) reject(data)
            resolve(data)
        })
    })
}
Promise.all([read('1.txt'),read('2.txt')]).then(data=>{
    console.logdata
},err=>{
    console.log(err)
})


// Promise异步实现顺序
console.log(Promise);
new Promise(resolve => {
    console.log(1);
    resolve(3);
    Promise.resolve().then(()=> console.log(4))
}).then(num => {
    console.log(num)
});
console.log(2);

// 自定义Promise
function Promise(){
    let self=this;
    self.status='pending';
    self.value=undefined;
    self.reason=undefined;

    function resolve(value){
        if(self.status==='pending'){
            self.status='resolved';
            self.value=value
        }
    }

    function reject(reason){
        if(self.status==='pending'){
            self.status='rejected';
            self.reason=reason
        }
    }
    executor(resolve,reject)
}
// then方法Promise对象的状态改变时确定执行的操作
Promise.prototype.then=function(onFullfilled,onRejected){
    let self=this;
    
    if(self.status==='resolved'){
        onFullfilled(self.value)
    }
    if(self.status==='rejected'){
        onRejected(self.reason)
    }
}