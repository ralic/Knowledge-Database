////////////////////////////////////////
//////// config MTcanvas ///////////////
////////////////////////////////////////
MTcanvas.setMaskingTapeWidth(13);
MTcanvas.Restart();

////////////////////////////////////////
//////// section 1 /////////////////////
////////////////////////////////////////

var c = document.getElementById("section1Canvas"),
    ctx = c.getContext("2d");

// background color
//ctx.fillStyle = "#FFDC00";
//ctx.fillRect(0, 0, 800, 300);

// draw cloud
ctx.beginPath();
ctx.strokeStyle = "#fff";
ctx.lineWidth = 8;
ctx.arc(600, 300, 100, 0, 1.53 * Math.PI);
ctx.moveTo(800, 260);
ctx.arc(800, 260, 200, 0, 1.09 * Math.PI, true);
ctx.stroke();

// draw MT
ctx.font = '20pt Verdana';
ctx.fillStyle = '#fff';
ctx.fillText("MT", 585, 370);

// draw 0.1
ctx.font = '10pt Verdana';
ctx.fillStyle = '#fff';
ctx.fillText("0.1", 630, 370);
// draw Beta
ctx.font = '12pt Verdana';
ctx.fillText("Beta", 750, 90);


////////////////////////////////////////
//////// section 2 /////////////////////
////////////////////////////////////////

var c2 = document.getElementById("section2Canvas"),
    ctx2 = c2.getContext("2d");

//ctx2.fillStyle = "#2ECC40";
//ctx2.fillRect(0, 0, 800, 300);

// draw cloud
ctx2.beginPath();
ctx2.strokeStyle = "#2fee44";
ctx2.lineWidth = 8;
ctx2.arc(600, 300, 100, 0, 1.53 * Math.PI);
ctx2.moveTo(800, 260);
ctx2.arc(800, 260, 200, 0, 1.09 * Math.PI, true);
ctx2.stroke();

// draw MT
ctx2.font = '20pt Verdana';
ctx2.fillStyle = '#2fee44';
ctx2.fillText("canvas", 555, 370);

////////////////////////////////////////
//////// section 3 /////////////////////
////////////////////////////////////////

var c3 = document.getElementById("section3Canvas"),
    ctx3 = c3.getContext("2d");

//ctx2.fillStyle = "#2ECC40";
//ctx2.fillRect(0, 0, 800, 300);

// draw cloud
ctx3.beginPath();
ctx3.strokeStyle = "#001F3F";
ctx3.lineWidth = 8;
ctx3.arc(600, 300, 100, 0, 1.53 * Math.PI);
ctx3.moveTo(800, 260);
ctx3.arc(800, 260, 200, 0, 1.09 * Math.PI, true);
ctx3.stroke();

// draw MT
ctx3.font = '20pt Verdana';
ctx3.fillStyle = '#001F3F';
ctx3.fillText("design", 555, 370);