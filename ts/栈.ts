class Stack {
  private dataStore: Array<any>;
  private top: number;
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }
  public push(element) {
    this.dataStore[this.top++] = element;
  }
  public pop() {
    return this.dataStore[--this.top];
  }
  public peek() {
    return this.dataStore[this.top - 1];
  }
  public length() {
    return this.top;
  }
  public clear() {
    this.top = 0;
  }
}
function mulBase(num, base) {
  let s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num / base);
  } while (num > 0);
  let converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}
function isPalindrome(word) {
  let s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  var rWord = "";
  while (s.length() > 0) {
    rWord += s.pop();
  }
  return word === rWord;
}

function fact(n) {
  let s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  let product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

function getMatch(str) {
  let s = new Stack();
  let left = ["(", "[", "{"];
  let right = [")", "]", "}"];
  for (let i = 0; i < str.length; i++) {
    if (left.indexOf(str[i]) > -1) {
      s.push(str[i]);
    } else if (right.indexOf(str[i]) > -1) {
      let temp = s.peek();
      switch (str[i]) {
        case ")":
          if (temp === "(") {
            s.pop();
            break;
          }
          return i + 1;
        case "]":
          if (temp === "[") {
            s.pop();
            break;
          }
          return i + 1;
        case "}":
          if (temp === "{") {
            s.pop();
            break;
          }
          return i + 1;
        default:
          break;
      }
    }
  }
  if (s.length() > 0) {
    return str.length + 1;
  }
  return -1;
}
console.log(getMatch("2+3/1+(3*2"));

let ss = [1,2,3,3,2,3,2,3];
function removeSuger (arr:Array<any>):Array<number>{
  let s =new Stack();
  arr.map(item=>{
    s.push(item)
  })
  let newArr = []
  while(s.length()>0){
    let color = s.pop();
    if(color!=2){
      newArr.push(color)
    }
  }
  return newArr;
}
removeSuger(ss)