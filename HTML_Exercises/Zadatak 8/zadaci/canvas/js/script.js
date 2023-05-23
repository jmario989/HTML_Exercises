function crtez(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    // ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, 500, 360);

    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.fillRect(5, 5, 490, 350);

    ctx.beginPath();
    ctx.lineWidth = 12;
    ctx.strokeStyle = "white";
    ctx.strokeRect(154, 30, 180, 180);

    ctx.beginPath();
    ctx.arc(245, 90, 13, 0, 2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(190, 160);
    ctx.lineTo(300, 160);
    ctx.stroke();

    ctx.beginPath();
    ctx.font = "bold 46px 'Arial Black', Gadget, sans-serif";
    // ctx.fillStyle = "white";
	ctx.fillText("ALGEBRA", 120, 260);

    ctx.beginPath();
    ctx.moveTo(120, 276);
    ctx.lineTo(366, 276);
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    c.style.letterSpacing = "9px";
    ctx.font = "32px 'Arial Black', Gadget, sans-serif";
    // ctx.fillStyle = "white";
	ctx.fillText("UČILIŠTE", 120, 315);
}