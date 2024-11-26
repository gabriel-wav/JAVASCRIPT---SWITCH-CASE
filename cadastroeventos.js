let prompt = require("prompt-sync")();

let evento = parseInt(
  prompt(`- 1 → Workshop
- 2 → Palestra
- 3 → Hackathon
Escolha o tipo de evento desejado:`)
);

switch (evento) {
  case 1:
    let numParticipantesWorkshop = parseInt(prompt("Quantos participantes?"));
    let custoWorkshop = numParticipantesWorkshop * 50;

    console.log("Tipo de evento: " + evento + " Workshop");
    console.log("Número de horas: " + numParticipantesWorkshop);
    console.log("Custo: " + custoWorkshop + " reais.");

    break;
  case 2:
    let numHorasPalestra = parseInt(
      prompt("Quantos horas de palestra (cada hora custa R$ 100)?")
    );
    let custoPalestra = numHorasPalestra * 100;

    console.log("Tipo de evento: " + evento + " Palestra");
    console.log("Número de horas: " + numHorasPalestra);
    console.log("Custo: " + custoPalestra + " reais.");
    break;
  case 3:
    let numDiasHackathon = parseInt(
      prompt("Quantos dias de hackathon (cada equipe custa R$ 500 por dia)?")
    );
    let numEquipesHackathon = parseInt(
      prompt("Quantos equipes de hackathon (cada equipe custa R$ 500 por dia)?")
    );

    let custoHackathon = numDiasHackathon * numEquipesHackathon * 500;

    console.log("Tipo de evento: " + evento + " Hackathon");
    console.log("Número de dias: " + numDiasHackathon);
    console.log("Número de equipes: " + numEquipesHackathon);
    console.log("Custo: " + custoHackathon + " reais.");
    break;
  default: // Opção inválida
    console.log("Opção inválida");
    break;
}
