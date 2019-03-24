var startTime=(new Date()).getTime()
var db=connect('log')
var array=[]

for(let i=0;i<1000;i++){
    array.push({num:i})
}

db.test.insert(array)

var runTime=(new Date()).getTime()-startTime
print(runTime)
// 批量 插入性能更好