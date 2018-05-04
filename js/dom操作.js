(()=>{
   var ndContainer=document.getElementById('js-list');
   if(!ndContainer){
       return
   }
   for(var i=0;i<3;i++){
       var ndItem=document.createElement('li');
       ndItem.innerHTML=i+1;
       ndContainer.appendChild(ndItem)
   }
   ndContainer.addEventListener('click',function(e){
       const target=e.target;
       if(target.tagName==='li'){
           alert(target.innerHTML)
       }
   })
})()

// dom树遍历  广度优先遍历
const traverse=(ndRoot)=>{
    const queue=[ndRoot];
    while(queue.length){
        const node=queue.shift();
        printInfo(node);
        if(!node.children.length){
           continue
        }
        Array.from(node.children).forEach(x=>queue.push(x))
    }
}
const printInfo=(node)=>{
    console.log(node.tagName,`.${node.className}`)
}
traverse(document.querySelector('.root'))