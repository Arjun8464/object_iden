img="";
dectect_status="";
objects = [];


function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetecter=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Dectecting Objects";
}
function modelLoaded(){
    console.log("model is Loaded!");
    dectect_status=true;
    objectDetecter.detect(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else
    {console.log(results);
    objects = results;}
}

function draw(){
    image(img,0,0, 640, 420);
   
    if(dectect_status !="")
    {
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            percent = floor(objects[i].confidence * 100);
            console.log(percent);
            fill('#4B0082');
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#4B0082");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}