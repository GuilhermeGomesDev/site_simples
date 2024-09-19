'use strict' // o modo estrito, que reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros.
const switcher = document.querySelector('.btn'); //referencia para o botão

switcher.addEventListener('click', function() { 
    document.body.classList.toggle('dark-theme') //toggle para mudança de tema

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className); //mensagem de console
});