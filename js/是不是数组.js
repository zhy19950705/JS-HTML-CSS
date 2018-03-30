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
console.log(tempArr)