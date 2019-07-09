//js/fruit.js    
//1:创建构造函数fruitObj
var fruitObj = function(){
    //1:创建二个变量保存图片
    this.orange = new Image();
    this.blue = new Image();
    //2:坐标 x,y,l宽度 功能生长
    this.x = [];
    this.y = [];
    this.l = [];
    //3:是否是显示状态 true 显示 false 隐藏
    this.alive = [];
    //4:食物速度(向上漂浮)/类型/海葵下标
    this.spd = [];
    this.fruitType = [];
    this.aneNo = [];
}
//2:为构造函数添加属性num = 30
fruitObj.prototype.num = 30;
//3:为构造函数添加方法init
fruitObj.prototype.init = function(){
     //3.1 下载二张图片
     this.orange.src = "src/fruit.png";
     this.blue.src = "src/blue.png";
     //3.2:状态坐标海葵速度类型
     for(var i=0;i<this.num;i++){
       this.alive[i] = false;
       this.x[i] = 0;
       this.y[i] = 0;
       this.aneNo[i] = 0;
       this.fruitType[i] = "";
       this.l[i] = 0;
       this.spd[i]=Math.random()*0.017+0.003;
     }
     
}
//4:为构造函数添加方法draw
fruitObj.prototype.draw = function(){
   for(var i=0;i<this.num;i++){
    //1:状态true绘制
    if(this.alive[i]){ 
     //2:判断绘制哪张图片 blue orange
     if(this.fruitType[i]=="blue"){
       var pic = this.blue;
     }else{
       var pic = this.orange;
     }
     if(this.l[i]<=14){
      //3:由小变大 0 ~ 14  width/height
      var no = this.aneNo[i];     //海葵下标
      this.x[i] = ane.headx[no];  //终点坐标
      this.y[i] = ane.heady[no];  //终点坐标
      this.l[i] += this.spd[i]*12;//宽高增加
      ctx2.drawImage(pic,
        this.x[i],this.y[i],
        this.l[i],this.l[i]);
     }else{
       //4:向上漂浮         y - 1
       this.y[i] -= this.spd[i] * 12 * 3;
       ctx2.drawImage(pic,
        this.x[i],this.y[i],
        this.l[i],this.l[i]);
     }
     //5:漂浮出屏幕隐藏    y < 0
     if(this.y[i]<10){
       this.alive[i] = false;
     }
    }//if end
   }//for end
}
//5:将fruit.js 引入index.html
//6:在main.js 创建食物全局变量并且调用相应方法

//7:监听画布中显示食物数量是否不足15
function fruitMonitor(){
    //计算累加和.是否不足15个显示食物
    var sum = 0;
    for(var i=0;i<fruit.num;i++){
       if(fruit.alive[i])sum++;
    }
    if(sum < 15){
      sendFruit();//一次挑一个
      return;
    }
}
//8:从隐藏食物中挑一个(从隐藏食物挑一个)
function  sendFruit(){
      //从隐藏食物中挑第一个食物,出生
      for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]==false){
           fruit.born(i);//一次生一个
           return;
        }
      }
}
//9:出生[x,y,l,alive,类型,海葵]
fruitObj.prototype.born = function(i){
    //出生时宽度0
    this.l[i] = 0;
    this.alive[i] = true;
    this.fruitType[i] = Math.random() < 0.9 ?"blue":"orange";
    this.aneNo[i] =  Math.floor(Math.random()*ane.num);
}
//10:在 main.js gameloop调用fruitMonitor函数