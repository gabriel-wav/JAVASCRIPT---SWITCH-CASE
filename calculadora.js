let prompt = require("prompt-sync")();

let operacao = parseInt(
  prompt(`
- 1 → Soma
- 2 → Subtração
- 3 → Multiplicação
- 4 → Divisão
Escolha a operação matemática desejada:`)
);

switch (operacao) {
  case 1:
    let somaNum1 = Number(prompt("Digite o primeiro número: "));
    let somaNum2 = Number(prompt("Digite o segundo número: "));

    console.log(somaNum1 + somaNum2);
    break;
  case 2:
    let subtracaoNum1 = Number(prompt("Digite o primeiro número: "));
    let subtracaoNum2 = Number(prompt("Digite o segundo número: "));

    console.log(subtracaoNum1 - subtracaoNum2);
    break;
  case 3:
    let multiplicacaoNum1 = Number(prompt("Digite o primeiro número: "));
    let multiplicacaoNum2 = Number(prompt("Digite o segundo número: "));

    console.log(multiplicacaoNum1 * multiplicacaoNum2);
    break;
  case 4:
    let divisaoNum1 = Number(prompt("Digite o primeiro número: "));
    let divisaoNum2 = Number(prompt("Digite o segundo número: "));

    console.log(divisaoNum1 / divisaoNum2);
    break;
  default:
    console.log("Opção inválida! Escolha uma operação de 1 a 4!");
}
