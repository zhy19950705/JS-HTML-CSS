foo() //TypeError
bar() //ReferrenceError
var foo=function bar(){

}


foo();//'b'
var a=true;
if(a){
    function foo(){
        console.log('a')
    }
}else{
   function foo(){
       console.log('b')
   }
}