function setup(){
    createCanvas(1000,1000);
  
    background(0,225,225)
    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);
}

function draw(){
    var x = 50;

while(x<width-25){
    ellipse(x, height/20, 50,50);
    x = x + 50;
    fill(color('green'));     
}
}
