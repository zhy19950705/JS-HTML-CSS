//es3就有了块作用域。with,catch
for (var i = 0; i < 3; i++) {
    console.log(i)
}
console.log(i)

// let不会在块级作用域进行提升
{
    console.log(b)
    let b = 3
}

