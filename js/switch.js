// case和a表达式的匹配算法与===相同
var a='42';
switch(true){
    case a==10:
         console.log("10 or '10'");
         break;
    case a==42:
         console.log(`42 or '42'`);
         break;
    default:
}

// switch中的true 和true仍然是严格相等
var a='hello world';
var b=10;
switch(true){
    case (a||b==10): //'hello word'!==true
    break;
    default:
    console.log('oops')
}  //oops
