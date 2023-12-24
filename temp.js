var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d"); 



var  randomX = Math.floor(Math.random()*500);
var  randomY = Math.floor(Math.random()*500);
var  randomRds = Math.floor(Math.random()*50);
var  randomClr = Math.random("red","green","blue");

console.log(randomClr);
const startAngle = 0;
var endAngle = 2*Math.PI;

for(i=0;i<=100;i++){
  ctx.beginPath();
  ctx.arc(randomX,randomY,randomRds,startAngle,endAngle);
  ctx.strokeStyle = "red";
  ctx.stroke();


}