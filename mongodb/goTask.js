var userName='Hanhan'
var timeStamp=Date.parse(new Date())
var jsonDatabase={'loginUser':userName,"loginTime":timeStamp}
var db=connect('log')
db.login.insert(jsonDatabase)

print('success')