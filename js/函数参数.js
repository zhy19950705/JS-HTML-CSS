function foo(a=42,b=a+1){
    console.log(arguments,arguments[0],arguments[1],a,b)
}

foo()  
foo(1)
foo(1,undefined)
foo(1,null)
foo(1,3)
// arguments数组已被废止，es6引入剩余参数..
function foo(a){
    console.log(a+arguments[1])
}
foo(1,2)

