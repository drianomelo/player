const controle = document.querySelectorAll("[data-controll]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const physicals = {
  altura: {
    finalização: 29,
    arremesso: 35,
    jogada: -21,
    defesa: 40,
  },
  peso: {
    finalização: 41,
    arremesso: 20,
    jogada: 0,
    defesa: -10,
  },
  velocidade: {
    finalização: 0,
    arremesso: 7,
    jogada: 48,
    defesa: -4,
  },
  força: {
    finalização: 27,
    arremesso: 0,
    jogada: -11,
    defesa: 40,
  },
  impulsao: {
    finalização: 30,
    arremesso: 10,
    jogada: 0,
    defesa: 10,
  },
};

console.log(controle);

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controll, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.peca);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-cont]");

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatisticas(peca) {
  console.log(physicals[peca]);

  estatisticas.forEach((elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + physicals[peca][elemento.dataset.estatistica]
  })
}

function alterarJogador()