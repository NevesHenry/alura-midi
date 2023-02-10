function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {     

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

addEventListener("keydown", function(event){
    let key = event.key;

    switch(key){
        case "q": tocaSom("#som_tecla_pom"); listaDeTeclas[0].classList.add('ativa'); break;
        case 'w': tocaSom('#som_tecla_clap'); listaDeTeclas[1].classList.add('ativa'); break;
        case 'e': tocaSom('#som_tecla_tim'); listaDeTeclas[2].classList.add('ativa'); break;
        case 'a': tocaSom('#som_tecla_puff'); listaDeTeclas[3].classList.add('ativa'); break;
        case 's': tocaSom('#som_tecla_splash'); listaDeTeclas[4].classList.add('ativa'); break;
        case 'd': tocaSom('#som_tecla_toim'); listaDeTeclas[5].classList.add('ativa'); break;
        case 'z': tocaSom('#som_tecla_psh'); listaDeTeclas[6].classList.add('ativa'); break;
        case 'x': tocaSom('#som_tecla_tic'); listaDeTeclas[7].classList.add('ativa'); break;
        case 'c': tocaSom('#som_tecla_tom'); listaDeTeclas[8].classList.add('ativa'); break;
    }
});

addEventListener("keyup", function(event){
    let key = event.key;

    switch(key){
        case "q": listaDeTeclas[0].classList.remove('ativa'); break;
        case 'w': listaDeTeclas[1].classList.remove('ativa'); break;
        case 'e': listaDeTeclas[2].classList.remove('ativa'); break;
        case 'a': listaDeTeclas[3].classList.remove('ativa'); break;
        case 's': listaDeTeclas[4].classList.remove('ativa'); break;
        case 'd': listaDeTeclas[5].classList.remove('ativa'); break;
        case 'z': listaDeTeclas[6].classList.remove('ativa'); break;
        case 'x': listaDeTeclas[7].classList.remove('ativa'); break;
        case 'c': listaDeTeclas[8].classList.remove('ativa'); break;
    }
});
