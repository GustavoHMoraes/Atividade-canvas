const canvas = document.getElementById('ret');
const ctx = canvas.getContext('2d');
 ctx.fillStyle="#2ACAEA";
 ctx.fillRect(0,0,250,400);
 ctx.fillStyle="#cff1c5";
 ctx.fillRect(250,0,250,400);

 var c = document.getElementById("circ");
 var ctxc = c.getContext('2d');
 ctxc.beginPath();
 ctxc.arc(250, 150, 140, 0, 2 * Math.PI);
 ctxc.lineWidth = 20;
 ctxc.strokeStyle="#3C0A51"
 ctxc.stroke();
 ctxc.fillStyle="green"
 ctxc.fill();
 