var newWidth = 75;
var newHeight = 75;

//setup function executes once// 
function setup(){
    createCanvas(600,400);
    background(50);
}

//draw function loops forever//
function draw(){
    // background(50);
    if(mouseIsPressed){
        noStroke();
        fill(200,0,255,100);
        ellipse(mouseX,mouseY,newWidth,newHeight);    
    }
    
}