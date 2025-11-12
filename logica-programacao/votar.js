/*
Enunciado:
Crie um programa que peça a idade de uma pessoa e mostre 
uma mensagem dizendo se ela pode votar ou ainda não pode votar.
*/

let idade = Number(prompt("Digite sua idade"));

if (idade < 16) {
    alert("Não pode votar.");
} else if (idade >= 16 && idade < 18) {
    alert("Voto opcional.");
} else {
    alert("Voto obrigatório");
}

/*
if (idade >= 16) {
    alert("Você já votar!");
} else {
    alert("Você ainda não pode votar.");
}
*/