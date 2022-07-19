img ="";
status = "";
objects = [];

 function preload()
 {
    song=loadSound("song.mp3");
 }

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
     video = createCapture(VIDEO);
video.size(380,380);
video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Dectecting objects";
}

function modelLoaded(){
console.log("model Loaded!");
status = true;
objectDetector.detect(video, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(video, 0, 0, 380, 380);

if(status != ""){
    objectDetector.detect(video, gotresult);
    for (i = 0; 1 < objects.length; i++) 
    {
document.getElementById("status").innerHTML = "status : object Detected";
document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :"+ objects.length;

fill(r,g,b);
fill("#FF0000");
percent = floor(objects[i].confidence * 100);
text(objects[i].label +" " + percent + "%", objects[i].x, objects[i].x + 15, objects[i].y + 15);
noFill();
stroke("red");
stroke("black")
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
if(objects[i].label=="person"){
song.stop();
} 
else
{
    song.play();
}
}
if(objects.length==0){
    song.play();
}
}
    
  
}