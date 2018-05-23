Array.from({length:100},(v,i)=>i)

new Array(100).fill(undefined).map((v,i)=>i)

new Array.apply(null,{length}).map((v,i)=>i)

// [...new Array(100)].map((v,i)=>i)