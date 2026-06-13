const gato=document.getElementById('gatito');
const mensaje=document.getElementById('mensaje');
const musica=document.getElementById('musica');

let iniciado=false;
let abierto=false;
let intervalo;

gato.addEventListener('click',()=>{
    if(!iniciado){
        iniciado=true;
        gato.classList.add('despierto');
        gato.src='gato_abierto.png';
        mensaje.classList.add('visible');

        musica.play().catch(()=>{});

        intervalo=setInterval(()=>{
            abierto=!abierto;
            gato.src=abierto ? 'gato_abierto.png' : 'gato_cerrado.png';
        },3000);
    }
});
