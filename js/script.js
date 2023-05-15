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
 ctxc.fillStyle="#ea2aca"
 ctxc.fill();

var cl = document.getElementById("lin");
var ctxl = cl.getContext("2d");
ctxl.lineWidth = 10;
ctxl.moveTo(5, 10);
ctxl.lineTo(450, 300);
ctxl.stroke();

var cv = document.getElementById("curv");
var ctxv = cv.getContext("2d");
ctxv.beginPath();
ctxv.lineWidth = 10;
ctxv.moveTo(0, 150);
ctxv.quadraticCurveTo(250, 20, 500, 150);
ctxv.stroke();

var ci = document.getElementById("img");
var ctxi = ci.getContext("2d");
var img = document.getElementById("paint");
ctxi.drawImage(img, 0, 0);
 