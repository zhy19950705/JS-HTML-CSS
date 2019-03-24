// 一个页面所有节点
document.querySelectorAll('*').length

// 
const getChildren = (node) =>{
    return Array.from(node.children)
    .reduce((acc,cur)=>cur.children.length?acc.concat(cur,getChildren(cur)):acc.concat(cur),[])
}