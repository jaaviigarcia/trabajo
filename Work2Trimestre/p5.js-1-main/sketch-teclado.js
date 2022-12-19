let img = "";
let bg = "";
let gg = "";
let tt = "";
function setup(){
    console.log("setup()");
    createCanvas(1265,840);
    img = loadImage("https://i.ibb.co/FV06Lhv/ndice.jpg");
    bg = loadImage("https://i.ibb.co/5jJnp2g/1280x720-Fondos-de-Pantalla-Estrellas-4-K-Espacio.jpg");
    tt= loadImage("https://i.ibb.co/3mQ3fhK/0b833bf0b632cd39b8aad3f9b6f60a9ada7615cd-00.gif")
    gg= loadImage("https://i.ibb.co/bF5vLGB/1970401-b70f6.gif")
}


function draw(){
    console.log("draw()"+frameCount);
    background(bg);
    console.log("teclaPulsada: "+keyCode );
    

    switch (keyCode) {
        case 40:
            
            image(img, frameCount%400, frameCount%600);
            break;
        case 38:
            image(tt, frameCount%400, 300);
            break;
        case 37:
            image(gg, 400, 300);         break;
        case 39:
         text("derecha",125,100);
           break;
        default:
            break;
    }


}
