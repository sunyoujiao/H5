//小游戏分数
//1.创建分数构造函数 dataObj
var dataObj=function(){
    this.score=0;//分数
    this.double=1;//是否双倍分数
}
//2.为分数添加绘制方法 draw
dataObj.prototype.draw=function(){
    //2.1保存状态
    ctx1.save();
    //2.2在屏幕中心绘制文本
    ctx1.font="35px Verdana";
    ctx1.fillStyle="#fff";
    var w=canWidth/2
    ctx1.fillText("SCORE:"+this.score,w-80,100);
    //2.7恢复状态
    ctx1.restore();
}
//3.为分数添加加分方法 addScore
dataObj.prototype.addScore=function(){
    console.log(2);
}
//4.将data.js添加index.html文件中
//5.在main.js创建对象并且调用相应方法
//6.