img="";
dectect_status="";



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
    {console.log(results);}
}

function draw(){
    image(img,0,0, 640, 420);
    fill("#FF0000");
    text("dog", 150, 70);
    stroke("#FF0000");
    noFill();
    rect(130, 58, 300, 300);

    fill("#FF0000");
    text("cat", 280, 100);
    stroke("#FF0000");
    noFill();
    rect(260, 71, 260, 300);
}