/* 任意一个字符重复两次或两次以上  /(.)\1+/g*/
const duplicated = (str) => {
    // var a = str.toLowerCase().split('').sort().join('');
    // var b = a.match(/(.)\1+/g)
    return (str.toLowerCase().split('').sort().join('').match(/(.)\1+/g) || []).length
}
console.log(duplicated('aabbccbbaadde'))
 
