var paragraphs = document.getElementsByClassName("numbercaractere");
var maxLength = 25; 

        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].textContent = paragraphs[i].textContent.slice(0, maxLength);
        }


const depoimentos = document.querySelectorAll('.depo__cards');

let indiceInicial = 0;
const intervalo = 1500; 


function exibirDepoimentos() {
  
  depoimentos.forEach(depoimento => {
    depoimento.style.display = 'none';
  });


  for (let i = indiceInicial; i < indiceInicial + 3; i++) {
    const indice = i % depoimentos.length;
    depoimentos[indice].style.display = 'flex';
  }
}


function avancarDepoimentos() {

  indiceInicial = (indiceInicial + 1) % depoimentos.length;

 
  exibirDepoimentos();
}


function iniciarCarrossel() {
 
  exibirDepoimentos();

 
  setInterval(avancarDepoimentos, intervalo);
}


document.addEventListener('DOMContentLoaded', iniciarCarrossel);




function voltarAoTopo() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  

  window.onscroll = function() {
    const btnVoltarTopo = document.getElementById('btn-voltar-topo');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnVoltarTopo.style.display = 'block';
    } else {
      btnVoltarTopo.style.display = 'none';
    }
  };
  