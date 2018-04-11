Task={
    setId:function(Id){this.Id=Id},
    outputId:function(){console.log(this.Id)}
}

// 让XYZ委托Task
XYZ=Object.create(Task)

XYZ.prepareTask=function(Id,Label){
    this.setId(Id);
    this.Label=Label
}
XYZ.OutputTaskDetails=function(){
    this.outputId();
    console.log(this.Label)
}

var b1=Object.create(XYZ)
b1.prepareTask('1','2')
var b2=Object.create(XYZ)
b2.setId('12')

b1.OutputTaskDetails();
b2.outputId()  //3个对象之间的关联

// 控件类
function Widget(width,height){
    this.width=width||50;
    this.height=height||50;
    this.$elem=null;
}

Widget.prototype.render-function($where){
    if(this.$elem){
        this.$elem.css({
            width:this.width+'px',
            height:this.height+'px'
        })
    }
}

function Button(width,height,label){
    //调用super构造函数
    Widget.call(this,width,height);
    this.label=label||'Default';
    this.$elem=$('<button>').text(this.label)
}

Button.prototype=Object.create(Widget.prototype)

//重写render
Button.prototype.render=function($where){
    //super调用
    Widget.prototype.render.call(this,$where);
    this.$elem.click(this.onClick.bind(this))
}

Button.prototype.onClick=function(evt){
    console.log('button'+this.label+'clicked')
}

$(document).ready(function(){
    var $body=$(document.body);
    var btn1=new Button(125,30,'Hello');

    btn1.render($body)
})