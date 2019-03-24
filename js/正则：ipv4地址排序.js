/*  */
const IPV4sort = (arr) => {
    arr = arr.map(item=>{ 
        return item.replace(/(\d+)/g, '00$1').replace(/0+(\d{3})/g, '$1')
    }).sort().map(item=>{
        return item.replace(/0*(\d+)/g, '$1')
    });
    return arr
}
console.log(IPV4sort(['12.12.12.12','2.2.2.2','101.1.1.1','1.1.1.1']))