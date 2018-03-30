let obj=[1,2,3]
const len=obj.length;
obj.length=0;
obj=Array.from({length:len})
console.log(obj)