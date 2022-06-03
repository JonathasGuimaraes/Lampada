const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const lampi = document.getElementById( 'lampi' );

function isLampiRes (){
    return lampi.src.indexOf ('Imagem2') > -1
}
function lampiOn () {
    if ( !isLampiRes()){
        lampi.src = './Image1.jpg';
    }
}
function lampiOff () {
    if ( !isLampiRes()){
        lampi.src = './Imag.jpg';
    }
}
function LampiRes () {
    lampi.src = './Imagem2.jpg';
}
function lampiOf () {
    if ( !isLampiRes()){
        lampi.src = './Imagem2.jpg';
    }
}

turnOn.addEventListener('click',lampiOn);
turnOff.addEventListener( 'click', lampiOff);
/*lampi.addEventListener ('mouseover' , lampiOn);
lampi.addEventListener ('mouseleave' , lampiOff);*/
lampi.addEventListener ('dblclick' ,LampiRes);