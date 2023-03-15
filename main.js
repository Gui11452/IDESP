const cabecalhoNavA = document.querySelectorAll('.cabecalho nav a');
const [a1, a2, a3, a4] = cabecalhoNavA;
const botaoMobile = document.querySelector('.botao-mobile');
const botaoMobileSpan = document.querySelectorAll('.botao-mobile span');
const [spanMobile1, spanMobile2, spanMobile3] = botaoMobileSpan;

const botaoOculto = document.querySelector('.botao-oculto');
const botaoOcultoSpan = document.querySelectorAll('.botao-oculto span');
const [spanOculto1, spanOculto2, spanOculto3] = botaoOcultoSpan;

const cabecalhoOculto = document.querySelector('.cabecalho-oculto');

const cabecalhoOcultoA = document.querySelectorAll('.cabecalho-oculto a');
const [a5, a6, a7, a8, a9, a10] = cabecalhoOcultoA;

document.addEventListener('click', e => {

    const el = e.target;

    if(el == a1 || el == a2 || el == a3 || el == a4
        || el == a6|| el == a7|| el == a8|| el == a9|| el == a10){
        e.preventDefault();
        const atributoHref = el.getAttribute('href');
        const to = document.querySelector(atributoHref).offsetTop;

        scroll({
            top: to - 80,
            behavior: 'smooth',
        })
    }
    if(el == botaoMobile || el == spanMobile1 || el == spanMobile2 || el == spanMobile3){
        cabecalhoOculto.classList.add('cabecalho-oculto-mostrar');
    } else if(el == botaoOculto || el == spanOculto1 || el == spanOculto2 || el == spanOculto3){
        cabecalhoOculto.classList.remove('cabecalho-oculto-mostrar');
    }

});