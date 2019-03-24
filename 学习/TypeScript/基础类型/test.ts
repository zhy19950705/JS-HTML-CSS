function saySomething1({x,y}={x:0,y:0}):void{
    console.log(x,y)
}

function saySomething2({x=0,y=0}){
    console.log(x,y)
}

function saySomething3({x=0,y=0}={x:2,y:2}){
    console.log(x,y)
}

saySomething1()
saySomething1({x:3,y:3})

saySomething2({});
saySomething2({x:3,y:3})

saySomething3();
saySomething3({})
