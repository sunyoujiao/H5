//js/ane.js 海葵版本一 直线
//1:创建海葵构造函数 aneObj
var aneObj = function(){
     this.x = [];  //保存所有海葵x
     this.len = [];//保存所有海葵高度
}
//2:为构造函数添加属性 num = 50
//将属性或方法添加原型,省内存
aneObj.prototype.num = 50; 
//3:为构造函数添加方法 init 初始化海葵
aneObj.prototype.init = function(){
  //小心:数值前加0变成8进制
  for(var i=0;i<this.num;i++){
    //每个海葵x坐标
    this.x[i] = i * 16 + Math.random()*20;
    //每个海葵高度
    this.len[i] = 200 + Math.random()*50;
  }
}
//4:为构造函数添加方法 draw 绘制海葵
aneObj.prototype.draw = function(){
    //4.1:保存状态
    ctx2.save();
    ctx2.strokeStyle = "#3b154e";
    ctx2.lineWidth = 20;   //线宽
    ctx2.lineCap = "round";//边线顶端样式圆角
    ctx2.globalAlpha = 0.5;//透明度
    //4.2:创建循环
    for(var i=0;i<this.num;i++){
     //4.3:移动画布底端
     ctx2.beginPath();
     ctx2.moveTo(this.x[i],canHeight);
     //4.4:向上画一条直线
     ctx2.lineTo(this.x[i],canHeight-this.len[i]);
     //4.5:描边
     ctx2.stroke();
    }
    //4.7:恢复状态
    ctx2.restore();
}
//5:将ane.js  添加index.html文件中
//6:在main.js 创建海葵对象并且调用相关方法