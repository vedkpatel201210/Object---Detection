function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img,0,0,600,500);
    fill("#FF0000");
    text("dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30,60,410,430);
}