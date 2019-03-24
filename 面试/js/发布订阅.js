class Player {
    constructor() {
        this.watcher = {};
        setTimeout(() => {
            this._publisher('play', true)
        }, 2000)

        setTimeout(() => {
            this._publisher('pause', true)
        }, 4000)
    }
    /* 发布 */
    _publisher(event, data) {
        if (this.watcher[event] && this.watcher[event].length) {
            this.watcher[event].map(callback => callback.bind(this)(data))
        }
    }
    /* 订阅 */
    subscribe(event, callback) {
        this.watcher[event] = this.watcher[event] || [];
        this.watcher[event].push(callback)
    }
    /* 退订事件 */
    unsubscribe(event = null, callback = null) {
        // 如果传入指定事件函数，则仅退订此事件函数
        if (callback && event) {
            if (this.watcher[event] && this.watcher[event].length) {
                this.watcher[event].splice(this.watcher[event].findIndex(cb => Object.is(cb, callback)), 1);
            }
            // 如果仅传入事件名称，则退订此事件对应的所有的事件函数
        } else if (event) {
            this.watcher[event] = []
            // 如果未传入任何参数，则退订所有事件
        } else {
            this.watcher = {}
        }
    }
}

const player = new Player();
const onPlayerPlay1 = function(data){
    console.log(this,data)
};
const onPlayerPlay2 = data =>{
    console.log(data)
}

const onPlayerPause = data => {
    console.log(`Player is paused,${data}`)
}

const onPlayerLoaded = data =>{
    console.log(`player is loader,${data}`)
}


player.subscribe('play',onPlayerPlay1);
player.subscribe('play',onPlayerPlay2);
player.subscribe('pause', onPlayerPause)
player.subscribe('loaded', onPlayerLoaded)

// 可以退订指定订阅事件
player.unsubscribe('play', onPlayerPlay2)
// 退订指定事件名称下的所有订阅事件
player.unsubscribe('play')
// 退订所有订阅事件
player.unsubscribe()

// 可以在外部手动发出事件（真实生产场景中，发布特性一般为类内部私有方法）
player._publisher('loaded', true)