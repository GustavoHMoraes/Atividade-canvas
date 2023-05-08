const canvas = document.getElementById('ret');
const ctx = canvas.getContext('2d');
 ctx.fillStyle="green";
 ctx.fillRect(10,10,150,100);

 var c = document.getElementById("MyCanvas");
 var ctxc = c.getContext('2d');
 ctxc.beginPath();
 ctxc.arc(95, 50, 40, 0, 2 * Math.PI);
 ctxc.stroke();
 ctxc.fillStyle = 'orange';
ctxc.fillStyle = '#FFA500';
ctxc.fillStyle = 'rgb(255, 165, 0)';
ctxc.fillStyle = 'rgba(255, 165, 0, 1)';