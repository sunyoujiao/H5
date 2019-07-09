//js/ane2.js
//1:创建aneObj构造函数
var aneObj = function(){
  this.rootx = [];//起点坐标x
  //rooty不用写固定值 600
  //控制点是一个固定值 起点y-100 x与起点相同
  this.headx =  [];//终点坐标x????
  this.heady = [];//终点坐标y
  this.amp = [];  //摆动幅度
  this.alpha = 0; //周期变化值-1 ~ 1
}
//2:为aneObj构造函数添加属性num=50
aneObj.prototype.num = 50;
//3:为aneObj构造函数添加方法init
aneObj.prototype.init = function(){
   for(var i=0;i<this.num;i++){
     //初始化起点坐标x
     this.rootx[i] = i*16+Math.random()*20;
     //初始化终点坐标x y
     this.headx[i] = this.rootx[i];
     this.heady[i] = canHeight-200+Math.random()*50;
     //初始化摆动幅度
     this.amp[i] = 20+Math.random()*20;
   }
}
//4:为aneObj构造函数添加方法draw
aneObj.prototype.draw = function(){
   //4.1:保存状态
   ctx2.save();
   //4.2:设置外观
   ctx2.strokeStyle = "#3b154e";//紫色线
   ctx2.lineWidth = 20;         //线宽
   ctx2.lineCap = "round";      //圆角
   ctx2.globalAlpha = 0.5;      //透明度
   //4.3:需要获取一个很少连续变化小数,
   //    获取-1 ~ 1范围数值 
   //-1 向左摆动  1向右摆动 
  this.alpha += 0.0008 * 36;
  var p = Math.sin(this.alpha);
  //4.4：创建循环/绘制路径
  for(var i=0;i<this.num;i++){
    ctx2.beginPath();
  //重新计算终点x
  this.headx[i]=this.rootx[i]+this.amp[i]*p;
  //移动起点坐标
  ctx2.moveTo(this.rootx[i],canHeight); 
  //绘制控制点和终点
  ctx2.quadraticCurveTo(
    this.rootx[i],canHeight-100,
    this.headx[i],this.heady[i]);
  ctx2.stroke();
  }
  //4.10:恢复状态
  ctx2.restore();
}
//5:将ane2.js 添加index.html文件中/注释ane.js