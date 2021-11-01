Status="";
function setup(){
    canvas=createCanvas(450,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(450,400);
    video.hide();
}
function start(){
objectDetector=ml5.objectDetector("cocossd",modeLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
i_value=document.getElementById("input").value;
}
function modeLoaded(){
    console.log("Model Loaded!");
    Status=true;
}
function draw(){
    image(video,0,0,450,400);
}