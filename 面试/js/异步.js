// let a=true
// setTimeout(()=>{
//     a=false
// },100)
// //死循环
// while (a){
//     console.log('while')
// }

// js是单线程的，任务分为宏任务和微任务，
// 宏任务包括整体代码script,setTimeout,setInterval
// 微任务包括Promise,process.nextTick
// 不同类型的任务会进入对应的Event Queue，进入整体代码后，开始第一次循环，接着执行所有微任务；
// 然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有微任务。
setTimeout(function () {
    console.log('setTimeout');
})

new Promise(function (resolve) {
    console.log('promise');
}).then(function () {
    console.log('then');
})

console.log('console');

// 
const tasks=[];
for(var i=0;i<5;i++){
    ((j)=>{
        tasks.push(new Promise((resolve)=>{
            setTimeout(()=>{
                console.log(new Date(),j)
                resolve()
            },j*1000)
        }))    
    })(i)
}

Promise.all(tasks).then(()=>{
    setTimeout(()=>{
        console.log(new Date(),i)
    },1000)
})

// 
const tasks=[];
const output=(i)=>new Promise((resolve)=>{
    setTimeout(()=>{
        console.log(new Date(),i)
        resolve()
    },i*1000);
})
for(var i=0;i<5;i++){
    tasks.push(output(i))
}
Promise.all(tasks).then(()=>{
    setTimeout(()=>{
        console.log(new Date(),i)
    },1000)
})

// es7
const sleep=(timeoutMS)=>new Promise((resolve)=>{
    setTimeout(resolve,timeoutMS)
})

(async ()=>{
    for(var i=0;i<5;i++){
        if(i>0){
            await sleep(1000)
        }
        console.log(new Date(),i)
    }
    await sleep(1000);
    console.log(new Date(),i)
})()


// async/await地狱
(async()=>{
    const pizzaData=await getPizzaData()
    const drinkData=await getDrinkData()
    const chosenPizza=choosePizza();
    const chosenDrink=chooseDrink();
    await addPizzaToCart(chosenPizza);
    await addDrinkToCart(chosenDrink);
    orderItems()
})()   //无并发操作
async function orderItems(){
    const items=await getCartItems();
    const noOfItems=items.length;
    for(var i=0;i<noOfItems;i++){
        await sendRequest(items[i])
    }  //for循环需要等待sendRequest函数完成后才能进行下一个迭代
}

// 忘记await，异步函数返回promise
(async()=>{
   const promise=doSomeAsyncTask()//一个未完成的promise
   const value=await promise
   console.log(value)  //实际返回值
})()


// 并发执行async函数
async function selectPizza(){
    const pizzaData=await getPizzaData(); //异步
    const chosenPizza=chosenPizza(); //同步
    await addPizzaToCart(chosenPizza) //异步
}
async function selectDrink(){
    const drinkData=await getDrinkData();
    const chosenDrink=chooseDrink();
    await addDrinkToCart(chosenDrink)
}
// (async()=>{
//     const pizzaPromise=selectPizza();
//     const drinkPromise=selectDrink();
//     await pizzaPromise
//     await drinkPromise
//     orderItems
// })()
(async()=>{
    Promise.all([selectPizza(),selectDrink()]).then(orderItems)
})()
// 创建一个数组，将 promise push 进去。然后使用 Promise.all() 我们就可以并行等待所有的 promise 处理完毕
async function orderItems(){
    const items=await getCartItems();
    const noOfItems=items.length;
    const promises=[];
    for(var i=0;i<noOfItems;i++){
        const orderPromise=sendRequest(items[i]);
        promises.push(orderPromise)
    }
    await Promise.all(promises)
}