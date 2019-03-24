// cat.call(dog,a,b,)=cat.apply(dog,[a,b])=(cat.bind(dog,a,b))=dog.cat(a,b)

class Cat{
    constructor(name){
        this.name=name
    }
    catchMouse(name1,name2){
        console.log(`${this.name} caught 2 mouse!They call ${name1} and ${name2}`)
    }
}

class Dog{
    constructor(name){
        this.name=name
    }
    catchCriminals(name1,name2){
        console.log(`${this.name} bite 2 criminals! Their name is ${name1} and ${name2}.`)
    }
}

const kitty=new Cat('Kitty')
const doggy=new Dog('Doggy')
kitty.catchMouse('hh','mm')
doggy.catchCriminals('tom','jerry')

kitty.catchMouse.call(doggy,'mm','hh')
kitty.catchMouse.apply(doggy,['mm','hh'])
const doggyCatchMouse = kitty.catchMouse.bind(doggy,'mm','hh')
doggyCatchMouse()