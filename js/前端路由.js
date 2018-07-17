// Hash Router  #
class Routers{
    constructor(){
        // 以键值对的形式存储路由
        this.routes={};
        // 当前路由的URL
        this.currentUrl='';
        // 记录出现过的hash
        this.history=[];
        // 作为指针，默认指向this.history的末尾，根据后退前进指向history中的不同hash
        this.currentIndex=this.history.length-1;

        this.refresh=this.refresh.bind(this);
        this.backOff=this.backOff.bind(this);
        // 默认不是后退操作
        this.isBack=false;
        // 监听
        window.addEventListener('load',this.refresh,false);
        window.addEventListener('hashchange',this.refresh,false)
    }
    // 将path路径与对应的callback函数存储
    route(path,callback){
        this.routes[path]=callback||function(){}
    }
    // 刷新
    refresh(){
        // 获取当前URL中的hash路径
        this.currentUrl=location.hash.slice(1)||'/';
        if(!this.isBack){
      // 如果不是后退操作,且当前指针小于数组总长度,直接截取指针之前的部分储存下来
      // 此操作来避免当点击后退按钮之后,再进行正常跳转,指针会停留在原地,而数组添加新hash路由
      // 避免再次造成指针的不匹配,我们直接截取指针之前的数组
      // 此操作同时与浏览器自带后退功能的行为保持一致
            if(this.currentIndex<this.history.length-1){
                this.history=this.history.slice(0,this.currentIndex+1)
            }
            this.history.push(this.currentUrl)
            this.currentIndex++
        }
        // 执行当前hash路径的callback函数
        this.routes[this.currentUrl]()
        console.log(this.currentIndex,this.history)
        this.isBack=false
    }

    // 后退
    backOff(){
        // 后退操作设置为true
        this.isBack=true;
        this.currentIndex<=0?(this.currentIndex=0):(this.currentIndex=this.currentIndex-1);
        location.hash=`#${this.history[this.currentIndex]}`
        this.routes[this.history[this.currentIndex]]
    }
    
}

Routers.route('/url',function(){
    changeBgColor()
})


// history API
// history.pushState用于在浏览历史中添加历史记录,但是并不触发跳转,接受三个参数
// history.replaceState方法的参数与pushState方法一模一样，区别是它修改浏览历史中当前纪录,而非添加记录,同样不触发跳转。
// popstate事件,每当同一个文档的浏览历史（即history对象）出现变化时，就会触发popstate事件。
class Routers{
    constructor(){
        this.routes={};
        // 在初始化时监听popstate事件
        this._bindPopState()
    }

    // 初始化路由
    init(path){
        history.replaceState({path:path},null,path);
        this.routes[path]&&this.routes[path]()
    }
    // 将路径和对应回调函数加入hashMap存储
    route(path,callback){
        this.routes[path]=callback||function(){}
    }

    // 触发路由对应回调
    go(path){
        history.pushState({path:path},null,path);
        this.routes[path]&&this.routes[path]()
    }

    // 监听popstate事件
    _bindPopState(){
        window.addEventListener('popstate',e=>{
            const path=e.state&&e.state.path;
            this.routes[path]&&this.routes[path]()
        })
    }
}