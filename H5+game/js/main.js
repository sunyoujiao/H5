//1:创建全局变量
 var can1 = null;  //画布一
 var can2 = null;  //画布二
 var ctx1 = null;  //画笔一
 var ctx2 = null;  //画笔二 
 var canWidth = 0; //画布宽度
 var canHeight = 0;//画布高度
//1.1:创建全局变量保存背景图片
 var bgPic = null; 
//1.2:创建全局变量保存海葵对象
 var ane = null;
//1.3:创建全局变量保存食物对象
 var fruit = null;
//1.4:创建全局变量保存大鱼对象
 var mom = null;
//1.5:创建全局变量保存画布上鼠标位置
 var mx = 0;
 var my = 0;
//1.6创建全局变量保存分数对象
var data=null;
//2:创建入口函数     game
function game(){
  init();
  gameloop();
}
//3:创建初始化函数   init
function init(){
  //3.1:为画布赋初始值 
  can1 = document.getElementById("canvas1");
  can2 = document.getElementById("canvas2");
  //3.2:为画笔赋初始值
  ctx1 = can1.getContext("2d");
  ctx2 = can2.getContext("2d");
  //3.3:为画布宽度和高度赋值
  canWidth = can1.width;
  canHeight = can1.height;
  //3.4:创建背景图片对象并且下载
  bgPic = new Image();
  bgPic.src = "src/background.jpg";
  //3.5:创建海葵对象并且调用初始化函数
  ane = new aneObj();
  ane.init();
  //3.6:创建食物对象并且调用初始化函数
  fruit = new fruitObj();
  fruit.init();
  //3.7:创建大鱼对象并且调用初始化函数
  mom = new momObj();
  mom.init();
  //3.8:为画布1绑定鼠标移动事件
  //    并且绑定事件处理函数 handleMove
  can1.addEventListener("mousemove",handleMove,true); 
  //3.9创建分数对象
  data=new dataObj();   
}
//4:创建绘制角色函数 gameloop
function gameloop(){
  //4.1:创建智能定时器调用gameloop
  requestAnimFrame(gameloop);
  //4.2:调用监听画布方法
  fruitMonitor();
  

  //4.5:调用绘制背景函数
  drawBackground();
  //4.6:调用绘制海葵函数
  ane.draw();
  //4.7:调用绘制食物函数 
  fruit.draw();
  //4.8:调用绘制大鱼函数
  ctx1.clearRect(0,0,canWidth,canHeight);
  mom.draw();
  //4.9调用回执分数函数
  data.draw();
  //4.3:调用碰撞检测方法 
  momFruitsCollsion();
}
//5:当body元素加载成功后调用game函数
document.body.onload = game;
//6:将main.js 引入index.html文件中
function handleMove(e){
  mx = e.offsetX;
  my = e.offsetY;
}