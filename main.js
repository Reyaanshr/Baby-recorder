img = "";
states = "";
objects = [];

function preload(){
    img = loadImage("https://cdn.imgbin.com/22/16/16/imgbin-sleep-infant-cartoon-illustration-sleeping-doll-boy-sleeping-beside-teddy-bear-illustration-xxP7ZcEiyps4iPrsDUTrGW9ik.jpg");
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Detecting objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    states = true;
}

function gotResults(error , results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function draw(){
    Image(img,0,0,380,380);
    if (objects = "person"){
        document.getElementById("babyfound").innerHTML = "Baby is found";
    }
    else{
        document.getElementById("babyfound").innerHTML = "Baby is not found";
    }
}
