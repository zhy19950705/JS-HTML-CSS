class Animal2{
    private name:String;
    public constructor(theName:string){this.name=theName};
    public move(distance:number){
        console.log(`${this.name} moved ${distance}m.`);
        
    }
}
class Snake extends Animal2{
   constructor(name:string){super(name)};
   move(distance=5){
     console.log('wang');
     super.move(distance)
   }
}
class Horse extends Animal2{
    constructor(name:string){super(name)};
    move(distance=45){
        console.log('ma');
        super.move(distance)
    }
}
let sam=new Snake('python')
let tom:Animal2=new Horse('tommy')
sam.move()
tom.move(33)

// readonly  必须在声明时或构造函数里初始化
class Octopus{
    readonly name:string;
    readonly numberOfLegs:number=0;
    constructor(theName:string){
        this.name=theName
    }
}
let daa=new Octopus('zz')
// daa.name='dd'  只读

// 参数属性  限定参数属性，声明并初始化成员
class X{
    constructor(private name:string){}
    move(){}
}

// 存取器
let password='ddd'
class Employee{
    private _fullName:string;
    get fullName():string{
        return this._fullName
    }
    set fullName(newName:string){
        if(password&&password==='ddd'){
            this._fullName=newName
        }
    }
}
let employee=new Employee();
employee.fullName='hh'
if(employee.fullName){
    console.log(employee.fullName);
    
}


// 静态属性
class Grid{
    static origin={x:0,y:0};
    calculate(point:{x:number;y:number}){
        let xDist=(point.x-Grid.origin.x);
        let yDist=(point.y-Grid.origin.y);
        return Math.sqrt(xDist*xDist+yDist*yDist)/this.scale;
    }
    constructor(public scale:number){}
}
let grid1=new Grid(1.0);
let grid2=new Grid(2.0);
grid1.calculate({x:2,y:3})
grid2.calculate({x:3,y:4})

// 抽象类  不包含具体实现 必须在派生类中实现
abstract class Department{
    constructor(public name:string){};
    printName():void{
        console.log(`${this.name}`);
    }
    abstract printMeeting():void
}
class AccountingDepartment extends Department{
    constructor(){super('hh')};
    printMeeting():void{console.log('zz');
    };
    generate():void{
        console.log('jj');
    }
}
let department:Department;
// department=new Department()   不能创建抽象类实例
department=new AccountingDepartment();

// 把类当接口用
class Point{
    x:number;
    y:number
}
interface Point3D extends Point{
    z:number
}
let point3:Point3D={x:1,y:2,z:3}