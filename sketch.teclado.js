function setup(){
     createCanvas(300,300);
}

function draw(){
console.log("keyCode: "+ keyCode);
clear();
background(125);

switch (keyCode) {
    case 38:
        text("arriba", 200, 200);
        break;
        case  40:
            text("abajo", 50, 50);
            break;
    case 37:
        text("izquierda", 100, 100);
        break;
        case 39:
            text("derecha", 150, 150);
    default:
        break;
}
}