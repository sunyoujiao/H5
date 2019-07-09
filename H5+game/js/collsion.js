//collsion.js 文件完成碰撞检测
//1:大鱼碰撞食物
function momFruitsCollsion(){
   for(var i=0;i<fruit.num;i++){
      //判断当前食物是否活动
      if(fruit.alive[i]){
       //大鱼与食物距离 <900 意思 <30 
       var len = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
       if(len<900){
         fruit.alive[i] = false;
         //涨分数
         if(fruit.fruitType[i]=="blue"){
           data.score+=100;
         }else{
           data.score+=200;
         }
       }
      }
   }
}
//2:将文件添加   index.html文件中
//3:在main.js   gameloop调用此函数
//4:大鱼碰撞小鱼
