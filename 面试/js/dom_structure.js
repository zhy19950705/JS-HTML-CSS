// 遍历一棵dom树
const getDomStructure = (node) => {
    if (!node.children.length) {
      return [node.tagName];
    }
  
    const arr = [];
  
    void function fn(d, t) {
      Array.from(d.children).forEach(n => {
        const _t = t ? `${t}->${n.tagName}` : `${d.tagName}->${n.tagName}`;
        if (n.children.length) {
          fn(n, _t);
        } else {
          arr.push(_t);
        }
      })
    }(node);
  
    return arr;
  }