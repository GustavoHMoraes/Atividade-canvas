
const canvas = document.getElementById('canva');
const ctx = canvas.getContext('2d');
ctx.fillStyle="#2ACAEA";
 ctx.fillRect(0,0,175,200);
 ctx.fillStyle="#cff1c5";
 ctx.fillRect(175,0,175,200);

 ctx.beginPath();
 ctx.arc(600, 100, 70, 0, 2 * Math.PI);
 ctx.lineWidth = 15;
 ctx.strokeStyle="#3C0A51"
 ctx.stroke();
 ctx.fillStyle="#ea2aca"
 ctx.fill();

ctx.lineWidth = 10;
ctx.moveTo(10, 250);
ctx.lineTo(240, 400);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 10;
ctx.moveTo(500, 400);
ctx.quadraticCurveTo(600, 240, 700, 400);
ctx.stroke();

var img=new Image();
  img.onload=function(){
  ctx.drawImage(this, 300, 600);
  }
  img.src = "img/paint.jpg"; 
  

 