function add(a, b) {
    return a + b
}

function add1(a) {
    return function (b) {
        return a + b;
    }
}

/* fn(a,b,c,d)=fn(a)(b)(c)(d) */
/* fn(a,b,c,d)=fn(a)(b,c,d) */
/* fn(a,b,c,d)=fn(a)(b)(c)(d)() */

var sub_curry = function (fn) {
    var args = [].slice.call(arguments, 1);
    return function () {
        return fn.apply(this, args.concat([].slice.call(arguments)))
    }
}
// var addCurry=curry(add,1,2);
// addCurry();
// var addCurry = curry(add,1)
// addCurry(2)
// var addCurry = curry(add);
// addCurry(1,2)
/* sub_curry 的作用就是用函数包裹原函数，然后给原函数传入之前的参数，当执行 fn0(...)(...) 的时候，执行包裹函数，返回原函数，
然后再调用 sub_curry 再包裹原函数，然后将新的参数混合旧的参数再传入原函数，直到函数参数的数目达到要求为止。 */
function curry(fn, length) {
    length = length || fn.length;
    var slice = Array.prototype.slice;
    return function () {
        if (arguments.length < length) {
            var combined = [fn].concat(slice.call(arguments));
            return curry(sub_curry.apply(this, combined), length - arguments.length)
        } else {
            return fn.apply(this, arguments)
        }
    }
}
var fn = curry(function(a,b,c){
    return [a,b,c]
})
// fn('a','b','c')
// fn('a','b')('c')