const canvas = document.getElementById('ret');
const ctx = canvas.getContext('2d');
 ctx.fillStyle="green";
 ctx.fillRect(10,10,150,100);

 function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    }
}