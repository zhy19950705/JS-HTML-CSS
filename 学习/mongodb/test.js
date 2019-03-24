var startTime=(new Date()).getTime()
var db=connect('log')

for(let i=0;i<1000;i++){
    db.test.insert({num:i})
}
var runTime=(new Date()).getTime()-startTime
print(runTime)