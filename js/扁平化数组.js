let arr=[1,[2,[3,[4]],5]];
let tempArr=[];
function flattenDeep(arr) {
    arr.map(v=>{
        if(Array.isArray(v)){
            flattenDeep(v)
        }else {
            tempArr.push(v)
        }
    })
}
flattenDeep(arr)


// 能用reduce的都用reduce，数组运算，你的下次运算结果需要用到上次运算的结果，都可以用reduce
// 添加扁平化深度控制
const flatten=(arr,depth=1)=>arr.reduce((a,b)=>{
    let i=1;
    if(Array.isArray(b)&&i<depth){
        i++
        return a.concat(flatten(b))
    }
    return a.concat(b)
},[])
console.log(flatten([1, [2, 3, [4, 5], 6], 7]))