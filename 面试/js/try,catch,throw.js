function foo(){
    try{
        // return 2
        throw 42
    }
    finally{
        console.log('hello')
    }
    console.log('never runs')
}
console.log(foo()) //先finally，后try返回值

//finally中抛出异常，函数在此中止
function foo(){
    try{
        return 42
    }
    finally{
        throw 'oops!'
    }
}

// finally的return会覆盖try中的return
function foo(){
    try{
        return 1
    }
    finally{
        return 2
    }
}