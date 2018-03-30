function fn() {
    console.log('real',this)
    let arr=[1,2,3]
    arr.map(function (item) {
        console.log('js',this)
        return item+1
    })
    arr.map(item=>{
        console.log('es',this)
        return item+1
    })
}
fn.call({a:100})