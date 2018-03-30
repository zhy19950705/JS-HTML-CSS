//手机号
let reg1=/^1[3578]\d{9}$/
console.log(reg1.test(18834234545))
console.log(reg1.test(1881233))
console.log(reg1.test(12345678909))


let reg2=/\b([a-zA-z]+)\b\s+\1\b/