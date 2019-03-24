export class Baby {
    private _name:string;
    constructor(name:string){
        this._name=name;
        console.log('晗晗想睡觉')
    }

    static smile(){
        console.log('开心')
    }

    public getBabyByName():string{
        return this._name
    }
}
export let baby=new Baby('晗晗')