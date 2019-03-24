//面对对象
let People=function (name) {
    this.name=name
}

People.prototype={
    eat:function(something){
        console.log(`${this.name}吃${something}`)
    }
}

let zz=new People('真真','女',24)
zz.eat('火锅')

//面向过程
let eat=function (name,something) {
    console.log(`${name}吃${something}`)
}
eat('真真','火锅')


//面向对象
zz.coding=function () {
    console.log(`${this.name}写代码`)
}
zz.coding()

//面向过程
let coding=function (who) {
    console.log(`${who}写代码`)
}
coding('zz')
