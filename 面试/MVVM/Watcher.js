
// 订阅者应该是Watcher, 而且var dep = new Dep();是在 defineReactive方法内部定义的，所以想通过dep添加订阅者，就必须要在闭包内操作，所以我们可以在 getter里面动手脚

function Watcher(){

}

Watcher.prototype={
    get:function(key){
        Dep.target=this;
        this.value=data[key];
        Dep.target=null
    }
}