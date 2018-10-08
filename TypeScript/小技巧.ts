/** A cool guy **/
interface Person {
    /* A cool name */
    name : string
}

const p : Person = {
    name: 'hanhan'
}

/** @author hanhan */
interface Opt{
    timeout:number
}
const defaultOption:Opt={
    timeout:500
}
// 当一个 interface 总有一个字面量初始值时，可以考虑这种写法以减少重复代码。
const defaultOption2={
    timeout:500
}

type opt=typeof defaultOption2


/* 巧用查找类型+泛型+keyof */
interface API {
    '/user':{name:string},
    '/menus':{foods:string}
}
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
    return fetch(url).then(res => res.json())
}
get('/user')


