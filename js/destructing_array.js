const destructuringArray = (arr,keyStr)=>{
    const keyArr=JSON.parse(keyStr.replace(/(\w+)/g,'"$1"'));
    return (resolveKey=(keyA,valueA)=>{
        return keyA.reduce((accObj,curObj,i)=>{
            if(Array.isArray(curObj)){
                return {...accObj,...resolveKey(curObj,valueA[i])}
            }else{
                accObj[curObj]=valueA[i]
                return accObj
            }
        },{})
    })(keyArr,arr)
}
destructuringArray([1,[2,3],5],'[a,[b],c]')