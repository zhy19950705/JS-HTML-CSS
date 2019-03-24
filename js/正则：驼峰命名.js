/* \b表示匹配一个单词的边界  */
const camelCaseName = (str) => {
    return str.split(' ').map((value,index) => {
        return value.replace(/\b(\w)/g, function(f1){
            return f1.toUpperCase()
        })
    }).join('')
}
console.log(camelCaseName('hello why'))