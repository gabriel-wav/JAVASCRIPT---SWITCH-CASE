let prompt = require("prompt-sync")();

// Solicitar ao usuário que digite uma cor
let cor = prompt("Dicionário de cores, digite a cor: ").toLowerCase(); // .toLowerCase() para garantir que a entrada seja case-insensitive

// Estrutura de controle switch para verificar a cor digitada
switch (cor) {
  case "azul":
    console.log("blue");
    break;
  case "vermelho":
    console.log("red");
    break;
  case "verde":
    console.log("green");
    break;
  case "cinza":
    console.log("gray");
    break;
  case "amarelo":
    console.log("yellow");
    break;
  case "laranja":
    console.log("orange");
    break;
  case "rosa":
    console.log("pink");
    break;
  case "roxo":
    console.log("purple");
    break;
  case "preto":
    console.log("black");
    break;
  default:
    console.log(
      "Esta cor não está registrada em nosso dicionário. Por favor, tente outra."
    );
}
