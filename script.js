var marginTop = document.querySelector("#container");
var removerBotao = document.querySelector("#comecar");
var comecou = document.querySelector("#questao");
var botaoVerificar = document.querySelector("#input-numero");
var numeroAleatorio = Math.round(Math.random() * (100 - 1) + 1);
var tentativas = 7;
var texto = document.getElementById("texto");

function comecar() {
  marginTop.classList.add("marginTop");
  removerBotao.classList.add("removerBotao");
  comecou.classList.add("comecou");
}

function verificar() {
  if (tentativas > 0) {
    if (numeroAleatorio == botaoVerificar.value) {
      texto.innerHTML = "Você acertou!";
      setTimeout(function () {
        history.go(0);
      }, 3000);
    } else if (numeroAleatorio > botaoVerificar.value) {
      texto.innerHTML = "É maior!";
      tentativas = tentativas - 1;
    } else if (numeroAleatorio < botaoVerificar.value) {
      texto.innerHTML = "É menor!";
      tentativas = tentativas - 1;
    }
  } else {
    texto.innerHTML = "Você zerou as tentativas";
    setTimeout(function () {
      history.go(0);
    }, 3000);
  }
}