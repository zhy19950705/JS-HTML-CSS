// 可以利用Obeject.defineProperty()来监听属性变动
// 那么将需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter
// 这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化。
function observe(data){
    if(!data||typeof data!=='object'){
        return
    }
    // 取出所有属性遍历
    Object.keys(data).forEach(function(key){
        defineReactive(data,key,val)
    })
}

function defineReactive(data,key,val){
    var dep=new Dep();
    observe(val);  //监听子属性
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:false,
        get:function(){
            return val
        },
        set:function(newVal){
            if(val=newVal) return;
            console.log('监听到值变化',val,'-->',newVal);
            val=newVal;
            dep.notify
        }
    })
}

// 实现一个消息订阅器，很简单，维护一个数组，用来收集订阅者，数据变动触发notify，再调用订阅者的update方法
function Dep(){
    this.subs=[]
}
Dep.prototype={
    addSub:function(sub){
        this.subs.push(sub)
    },
    notify:function(){
        this.subs.forEach(function(sub){
            sub.update()
        })
    }
}

