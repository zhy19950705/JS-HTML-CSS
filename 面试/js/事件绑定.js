let btn=document.getElementById('btn1')
btn.addEventListener('click',function (event) {
    console.log('clicked')
    // event.preventDefault() 阻止默认行为
//    event.stopPropagation() 阻止冒泡
})

function bindEvent(elem,type,fn) {
   elem.addEventListener(type,fn)
}

bindEvent(a,'click',function (e) {
    e.preventDefault();
    alert('clicked')
})