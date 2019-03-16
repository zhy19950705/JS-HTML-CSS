export class student {
  private score: Array<number>;
  private average: number;
  constructor(score: Array<number>, average: number) {
    this.score = score;
    this.average = average;
  }
  public getScore() {
    return this.score.reduce((a, b) => {
      return a + b;
    });
  }
  public addScore(score: number) {
    this.score.push(score);
  }
  public getAverage() {
    console.log(this.getScore() / this.score.length);
  }
}
let a = new student([], 0);
for (let i = 1; i < 10; i++) {
  a.addScore(i);
}
a.getAverage();

export class Table {
  private listSize: number;
  private pos: number;
  private dataStore: Array<any>;
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }
  public append(element: any) {
    this.dataStore[this.listSize++] = element;
  }
  private find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }
  public remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }
  public length() {
    return this.listSize;
  }
  public toString() {
    return this.dataStore;
  }
  public insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }
  public clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }
  public contains(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }
  public insert2(element) {
    if (
      this.dataStore.find(item => {
        return String(item) < String(element);
      })
    ) {
      return;
    }
    this.append(element);
  }
}

export class Person {
  private name: string;
  private sex: string;
  constructor(name: string, sex: string) {
    this.name = name;
    this.sex = sex;
  }
  public get(){
      return {
          name:this.name,
          sex:this.sex
      }
  }
}
let table = new Table();
for (let i = 0; i < 10; i++) {
  let temp = Math.random();
  table.append(new Person(`zhang${i}`, temp < 0.5 ? "man" : "women").get());
}
let obj={};
table.toString().map(item=>{
    if(!obj[item.sex]){
        obj[item.sex]=[item.name];
        return;
    }
    obj[item.sex].push(item.name)
})
console.log(obj)


