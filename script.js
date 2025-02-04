const form = document.querySelector("#form");

// Parando o evento de submit e processando os dados
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio do formulário

  // Captura os valores de peso e altura
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const alturaCm = Number(inputAltura.value);

  // Verifica se o peso e a altura são válidos
  if (!peso) {
    setResultado("[ERRO] Digite o peso!", false);
    return;
  }
  if (!alturaCm) {
    setResultado("[ERRO] Digite a altura!", false);
    return;
  }

  // Converte a altura de centímetros para metros
  const alturaMetros = alturaCm / 100;

  // Calcula o IMC
  const imc = getImc(peso, alturaMetros);
  const nivelImc = getNivelImc(imc);

  // Exibe o resultado
  const msg = `Seu IMC é ${imc} (${nivelImc})`;
  setResultado(msg, true);
});

// Função para determinar o nível do IMC
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

// Função para calcular o IMC
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// Função para criar um parágrafo
function criaP() {
  const p = document.createElement("p");
  return p;
}

// Função para exibir o resultado na tela
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
