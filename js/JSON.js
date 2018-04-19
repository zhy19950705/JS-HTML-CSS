// Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
// 用来解析JSON字符串，构造由字符串描述的JavaScript值或对象
// JSON.parse(text[, reviver])
JSON.parse('{}')  //{}
JSON.parse('[1,2,"false"]')  //[1,2,'false']

JSON.parse('{"p":5}',function(k,v){
    if(k==='') return v;
    return v*2
})   // {p:10}

JSON.parse('{"1":1,"2":2,"3":{"4":4,"5":{"6":6}}',function(k,v){
    console.log(k);  
    return v
}) // 1,2,4,6,5,3

// 将一个JavaScript值(对象或者数组)转换为一个 JSON字符串，如果指定了replacer是一个函数，则可以替换值，
// 或者如果指定了replacer是一个数组，可选的仅包括指定的属性。
JSON.stringify()
// 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
// 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
// undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。
// 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
// 不可枚举的属性会被忽略

JSON.stringify(undefined)  //undefined
JSON.stringify([1,undefined,function(){},4])  //"[1,null,null,4]"
JSON.stringify({a:2,b:function(){}})  //"{"a":2}"

// replacer可以是数组或者函数，用来指定哪些属性应该被处理，哪些应该被排除
function replacer(key,value){
    if(typeof value === 'string'){
       return undefined
    }
    return value
}
var foo={foundation:'mazilla',modal:'box',week:45,transport:'car',month:7}
var jsonString=JSON.stringify(foo,replacer)
// {"week":45,"month":7}
// 如果一个被序列化的对象拥有 toJSON 方法，那么该 toJSON 方法就会覆盖该对象默认的序列化行为：不是那个对象被序列化，而是调用 toJSON 方法后的返回值会被序列化，
var obj={
    foo:'foo',
    toString(){
        return 'bar'
    }
}
JSON.stringify(obj) //'"bar"'
JSON.stringify({x:obj}) //'{x:"bar"}'

// 使用JSON.stringify结合localStorage
var session={
    'screens':[],
    'state':true
}
session.screens.push({'name':'screenA','width':450,'height':250})
session.screens.push({'name':'screenB','width':650,'height':350})
session.screens.push({"name":"screenC", "width":750, "height":120});
session.screens.push({"name":"screenD", "width":250, "height":60});
session.screens.push({"name":"screenE", "width":390, "height":120});
session.screens.push({"name":"screenF", "width":1240, "height":650});

// 使用 JSON.stringify 转换为 JSON 字符串
// 然后使用 localStorage 保存在 session 名称里
localStorage.setItem('session',JSON.stringify(session))

// 然后是如何转换通过 JSON.stringify 生成的字符串，该字符串以 JSON 格式保存在 localStorage 里
var restoredSession=JSON.parse(localStorage.getItem('session'));

// 现在 restoredSession 包含了保存在 localStorage 里的对象
console.log(restoredSession)