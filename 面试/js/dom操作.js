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

// 深度优先遍历
const traverse=(p_element,p_callback)=>{
    p_callback(p_element);
    var list=p_element.children;
    for(var i=0;i<list.length;i++){
        traverse(list[i],p_callback)
    }
}


// click时，i已经为5，以下为正确的

for(var i=0;i<5;i++){
    var btn=document.getElementById('button');
    btn.appendChild(document.createTextNode('button'+i));
    btn.addEventListener('click',(function(i){
        return function(){
            console.log(i)
        }
    })(i))
    document.appendChild(btn)
}

// 新的匿名函数中的整个调用包装为btn.addEventListener：
for(var i=0;i<5;i++){
    var btn=document.getElementById('button');
    btn.appendChild(document.createTextNode('button'+i));
    (function(i){
      btn.addEventListener('click',function(){
          console.log(i)
      })
    })(i)
    document.appendChild(btn)
}

//调用数组对象的原生forEach方法来替换for循环：
['a','b','c','d','e'].forEach(function(value,i){
    var btn=document.getElementById('button');
    btn.appendChild(document.createTextNode('button'+i));
    btn.addEventListener('click',function(){console.log(i)})
    document.body.appendChild(btn)
})

for (let i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
  }