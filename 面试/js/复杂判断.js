/* 1、使用Array.include()处理多个条件 */
/* 2、减少嵌套 */
/* 3、 使用函数默认的参数和解构 */

function test(fruit, quantity = 1) {
    const redFruits = ['apple', 'strawberry', 'cherry'];

    // if(!fruit) throw new Error('No fruit');
    if (!fruit) return;
    // const q = quantity || 1;

    if (redFruits.includes(fruit)) {
        console.log('red');
        if (quantity > 10) {
            console.log('big quantity')
        }
    }
}


function test2({
    name
} = {}) {
    console.log(name || 'unknown')
}

/* 4、选择Map/Object字面量，而不是Switch语句 */
const fruitColor = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pineapply'],
    puple: ['grape', 'plum']
}

function test3(color) {
    return fruitColor[color] || []
}

console.log(test3('red'))

const actions = new Map([
    ['guest_1', () => { /* do sth */ }],
    ['guest_2', () => { /* do sth */ }],
    ['guest_2', () => { /* do sth */ }],
]);

function onClick(identity, status) {
    let action = actions.get(`${identity}_${status}`) || actions.get('default');
    action.call(this)
}

const actions2 = () => {
    const functionA = () => {
        console.log('A')
    };
    const functionB = () => {
        console.log('B')
    };
    const functionC = () => {
        console.log('C')
    };
    return new Map([
        // [{identity:'guest',status:1},functionA],
        // [{identity:'guest',status:2},functionA],
        // [{identity:'guest',status:3},functionA],
        // [{identity:'guest',status:4},functionA],
        // [{identity:'guest',status:5},functionB],
        [/^guest_[1-4]$/, functionA],
        [/^guest_[5]$/, functionB],
        [/^guest_.*$/, functionC]
    ])
}

function onClick2(identity, status) {
    // let action=[...actions2()].filter(([value,index])=>(value.identity==identity&&value.status==status));
    let action = [...actions2()].filter(([key, value]) => (key.test(`${identity}_${status}`)))
    action.forEach(([key, value]) => value.call(this))
}
onClick2('guest', 1)


/* Array.every,Array.some */
const fruits = [{
        name: 'apple',
        color: 'red'
    },
    {
        name: 'banana',
        color: 'yellow'
    },
    {
        name: 'grape',
        color: 'purple'
    }
]

function test4() {
    const isAllRed = fruits.every(f => f.color === 'red');
    console.log(isAllRed)
}

function test5() {
    const isAnyRed = fruits.some(f => f.color === 'red');
    console.log(isAnyRed)
}