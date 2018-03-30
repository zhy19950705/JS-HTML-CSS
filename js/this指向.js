let name="真真";
let obj={
    name:'张晗宇',
    showName:function () {
        console.log(this.name)
    },
    returnName:function () {
        return this.name
    },
    returnFunctionName:function () {
        return function () {
            console.log(this.name)
        }
    }
};
obj.showName();
console.log(obj.returnName());
console.log(obj.returnFunctionName()());
obj.showName.call(name);
console.log(obj.returnName.call(name));
obj.returnFunctionName.call(name);

// let newObj=obj.returnFunctionName().bind(window);
// newObj.call(obj)


let big='a';
let obj2={
    big:'b',
    showBig:function () {
        return this.big
    }
};
console.log(obj2.showBig.call(big))