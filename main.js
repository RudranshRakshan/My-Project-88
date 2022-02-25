
canvas = new fabric.Canvas("myCanvas");

ball_x = 30;
ball_y = 30;

hole_x = 800;
hole_y = 350;

playerObjectw = "";

block_image_width = 5;
block_image_height = 5;

function load_img() {
	fabric.Image.fromURL("golf-h.png", function (img) {
		playerObjectx = img;
		playerObjectx.scaleToWidth(50);
		playerObjectx.scaleToHeight(50);
		playerObjectx.set({
			top: hole_y,
			left: hole_x
		})
		canvas.add(playerObjectx)
	})
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", function (img) {
		playerObjectw = img;
		playerObjectw.scaleToWidth(40);
		playerObjectw.scaleToHeight(40);
		playerObjectw.set({
			top: ball_y,
			left: ball_x
		})
		canvas.add(playerObjectw)
	})
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (ball_x >= 785 && ball_y >= 335) {
		document.getElementById("win").style.display = "inline";
		document.getElementById("myCanvas").style.display = "none";
	}
	if (keyPressed == '38') {
		up();
		console.log("up");
	}
	if (keyPressed == '40') {
		down();
		console.log("down");
	}
	if (keyPressed == '37') {
		left();
		console.log("left");
	}
	if (keyPressed == '39') {
		right();
		console.log("right");
	}
}

function up(){
    if (ball_y>=0){
        ball_y=ball_y-10;
		canvas.remove(playerObjectw)
        new_image();
    }
}

function down(){
    if (ball_y<=canvas.height-50){
        ball_y=ball_y+10;
		canvas.remove(playerObjectw)
        new_image();
    }
}

function right(){
    if (ball_x<=canvas.width-60){
        ball_x=ball_x+10;
		canvas.remove(playerObjectw)
        new_image();
    }
}

function left(){
    if (ball_x>=0){
        ball_x=ball_x-10;
		canvas.remove(playerObjectw)
        new_image();
    }
}


