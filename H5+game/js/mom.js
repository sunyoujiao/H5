//mom.js 大鱼
//1:创建构造函数 momObj
var momObj = function(){
   this.bigEye = []; //保存大鱼眼睛图片
   this.bigBody = [];//保存大鱼身体图片
   this.bigTail = [];//保存大鱼尾巴图片
   this.x;//保存大鱼位置
   this.y;
   this.angle;//保存大鱼游动角度
}
//2:为构造函数添加init
momObj.prototype.init = function(){
 //2.1:创建大鱼眼睛图片并且下载图 
 for(var i=0;i<2;i++){
  this.bigEye[i] = new Image();
  this.bigEye[i].src = "src/bigEye"+i+".png";
 }
 //2.2:创建大鱼身体图片并且下载
 for(var i=0;i<8;i++){
  this.bigBody[i]=new Image();
  this.bigBody[i].src = "src/bigSwim"+i+".png"; 
 }
 //2.3:创建大鱼尾巴图片并且下载
 for(var i=0;i<8;i++){
   this.bigTail[i] = new Image();
   this.bigTail[i].src = "src/bigTail"+i+".png"
 }
 //2.4:大鱼位置与角度
 this.x = 0;
 this.y = 0;
 this.angle = 0;

}
//3:为构造函数添加draw 
momObj.prototype.draw = function(){
    //3.0 将大鱼位置修改鼠标位置
    this.x = mx;
    this.y = my;
    //3.1:保存状态 ctx1
    ctx1.save();
    //3.2:平移画布原点在大鱼x,y
    ctx1.translate(this.x,this.y);
    //3.3:旋转大鱼角度
    ctx1.rotate(this.angle);
    //3.4:画大鱼身体
    ctx1.drawImage(this.bigBody[0],0,0); 
    //3.5:画大鱼尾巴
    ctx1.drawImage(this.bigTail[0],0+37,+5); 
    //3.6:画大鱼眼睛
    ctx1.drawImage(this.bigEye[0],0+15,0+20);
    //3.10:恢复状态 ctx1
    ctx1.restore();
}
//4:将mom.js 添加 index.html
//5:并且在main.js 创建对象并且调用相关方法
