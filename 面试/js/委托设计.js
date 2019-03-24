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

// 使用Class实现
class Widget{
    constructor(width,height){
        this.width=width||50;
        this.height=width||50;
        this.$elem=null;
    }
    render($where){
        if(this.$elem){
            this.$elem.css({
                width:this.width+'px',
                height:this.height+'px'
            })
        }
    }
}
class Button extends Widget{
    constructor(width,height,label){
        super(width,height);
        this.label=label||'Default';
    }
    render($where){
        super($where);
        this.$elem.click(this.onClick.bind(this))
    }
    onClick(evt){
        console.log(this.label+'clicked')
    }
}

// 委托控件对象
var Widget={
    init:function(width,height){
        this.width=width||50;
        this.height=height||50;
        this.$elem=null;
    },
    insert:function($where){
        if(this.$elem){
            this.$elm.css({
                width:width+'px',
                height:height+'px'
            }).appendTo($where)
        }
    }
}
var Button=Object.create(Widget)

Button.setUp=function(width,height,label){
    this.init(width,height);
    this.label=label||'default',
    this.$elem=$('button').text(this.label)
}
Button.build=function($where){
    this.insert($wher);
    this.$elem.click(this.onClick.bind(this))
}
Button.onClick=function(evt){
    console.log(this.label+'clicked')
}


// 
var LoginController={
    errors:[],
    getUser:function(){
        return document.getElementById('login_username').value;
    },
    getPassword:function(){
        return document.getElementById('login_password').value;
    },
    validateEntry:function(user,pw){
        user=user||this.getUser();
        pw=pw||this.getPassword();
        if(!(user&&pw)){
            return this.failure('dd')
        }else if(pw.length<5){
            return this.failure('dd')
        }
        return true
    },
    showDialog:function(title,message){
       
    },
    failure:function(err){
        this.errors.push(err);
        this.showDialog('error',err)
    }
}
// 让AuthController委托LoginController
var AuthController=Object.create(LoginController)

AuthController.errors=[];
AuthController.checkAuth=function(){
    var user=this.getUser();
    var pw=this.getPassword();

    if(this.validateEntry(user,pw)){
        this.server('/check-auth',{
            user:user,
            pw:pw
        }).then(this.accepted.bind(this))
        .failure(this.rejected.bind(this))
    }
}

AuthController.server=function(user,data){
    return $.ajax({
        url:url,
        data:data
    })
}

AuthController.accepted=function(){
    this.showDialog('success','a')
}

AuthController.rejected=function(err){
    this.showDialog('rejected',err)
}