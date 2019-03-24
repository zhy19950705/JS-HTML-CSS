function equals(x,y){
    var in1=x instanceof Object;
    var in2=y instanceof Object;
    // 如果都不是对象
    if(!in1||!in2){
       return x===y
    }
    if(Object.keys(x).length!==Object.keys(y).length){
        return false
    }
    for(var p in x){
        var a =x[p] instanceof Object;
        var b=y[p] instanceof Object;
        if(a&&b){
            return equals(a,b)
        }else if(x[p]!==y[p]){
            return false
        }
    }
    return true
}
console.log(equals({a:1},{a:2}))