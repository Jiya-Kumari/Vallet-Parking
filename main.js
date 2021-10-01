canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=200;
rover_x=200;
rover_y=200;
background_image="parkingLot.jpg";
rover_image="car2.png";
function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadbackground;
    background_imagetag.src=background_image;
    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=='38'){
        up();
        console.log("up keypress");
    }
    if(keypress=='40'){
        down();
        console.log("down keypress");
    }
    if(keypress=='37'){
        left();
        console.log("left keypress");
    }
    if(keypress=='39'){
        right();
        console.log("right keypress");
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<=600){
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=900){
        rover_x=rover_x+10;
        uploadbackground();
        uploadrover();
    }
}
