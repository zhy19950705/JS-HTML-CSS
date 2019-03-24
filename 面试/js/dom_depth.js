const getDomDepth=(node)=>{
    let max=1;
    (function f(n,m){
        m++
        Array.from(n.children).forEach(e=>{
            if(e.children.length){
                f(e,m)
            }else{
                if(max<m) max=m
            }
        })
    })(node,1)
    return max
}