function* whatIsLunch() {
    console.log('吃豆腐香菇')
    yield '豆腐香菇吃完了';
    yield* chiyutou();
    console.log('芋头头也吃完了')
    // buchile = yield '吃芋头头';
    return '吃饱饱'
    yield '吃不下啦'
}

function* chiyutou() {
    console.log('休息一下')
    let haochima = yield '吃芋头头';
    console.log('好吃吗？')
    yield haochima
}
let eat = whatIsLunch();
console.log(eat.next());
console.log(eat.next());
console.log(eat.next('好吃！'));
console.log(eat.return());
/* 因为generator可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，
利用这一点，写一个generator就可以实现需要用面向对象才能实现的功能。
例如，用一个对象来保存状态，得这么写： */
function* fib(max) {
    var a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n++
    }
    return;
}
let temp = fib(10)
// for(let x of fib(10)){
//     console.log(x)
// }
for (let i = 0; i < 10; i++) {
    console.log(temp.next())
}

function* nextId() {
    var currentId=1,i=0;
    while (i < 100) {
        yield currentId++
        i++
    }
}
for (let a of nextId(0)) {
    console.log(a)
}
var
    x,
    pass = true,
    g = nextId();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}