function setup(){
    createCanvas(300,300);
    
}
function draw(){
    clear();
    background(123);
   var teclaPulsada = keyCode;







   console.log("teclaPulsada:"+ teclaPulsada);
   textSize(50);
   switch(teclaPulsada){
    case 38:
        text("arriba", 100, 100);
        break;
        case 40:
            text("abajo",100,100);
            break;
            case 37:
                text("izquierda",100,100);
                break;
            case 39:
                ellipse(100,100,50,50);
                text("derecha",100,100);
                break
                default:
                    break;
   }

}