var prompt = require("prompt-sync")();

let bebida = parseInt(
  prompt(`
- 1 → Água
- 2 → Suco
- 3 → Refrigerante
- 4 → Café
Escolha a bebida desejada:`)
);

switch (bebida) {
  case 1:
    console.log("Aqui está sua Água");
    break;
  case 2:
    console.log("Aqui está seu Suco");
    break;
  case 3:
    console.log("Aqui está seu Refrigerante");
    break;
  case 4:
    console.log("Aqui está seu Café");
    break;
  default:
    console.log("Bebida inválida! Escolha de 0 a 4!");
}
