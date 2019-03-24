function Cache() {
    this.store= {}
}
Cache.prototype.new=function (name,fn) {
    if(!name||!fn||typeof fn !== 'function'){
        return
    }
    this.store[name]={name,fn,data:{}}
};

Cache.prototype.get=function (name,key) {
    const self=this.store[name];
    key = key||1;
    if(self.data[key]){
        return Promise.resolve(self.data[key])
    }
}