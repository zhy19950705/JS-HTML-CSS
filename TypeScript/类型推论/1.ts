window.onmousedown=function(mouseEvent:any){
    console.log(mouseEvent.button);
}

class Animal1{
  constructor(){}
}
class Rhino extends Animal1{

}
class Elephant extends Animal1{

}
class Snake extends Animal1{

}
function createZoo():Animal1[]{
    return [new Rhino(),new Elephant(),new Snake()];
}