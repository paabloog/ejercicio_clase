function setup(){
     createCanvas(200,200);
     
}

function draw(){
    console.log("Laura draw: "+ frameCount);
    console.log(mouseX + ","+ mouseY);
    clear();
    background(125);
     if(mouseX <100 && mouseY<100){
        fill(color('green'));
     }else if(mouseX >100 && mouseY<100){
        fill(color('red'));
     }else if((mouseX <100) && (mouseY>100)){
        fill(color('blue'));
     }else if(mouseX>100 && mouseY>100){
        fill(color('yellow'));
     }
     ellipse(mouseX, mouseY, 50, 50);
}


