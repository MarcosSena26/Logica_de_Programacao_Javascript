function executarExercicio35(){
alert("Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.")

let litrosVendidos = parseFloat(prompt("Digite o número de litros vendidos:"));
let tipoCombustivel = prompt("Digite o tipo de combustível (A para álcool, G para gasolina):")

const precoGasolina = 3.30;
const precoAlcool = 2.90;

let valorAPagar;

if (tipoCombustivel === 'A') {
    valorAPagar = litrosVendidos * precoAlcool;
} else if (tipoCombustivel === 'G') {
    valorAPagar = litrosVendidos * precoGasolina;
} else {
    alert("Tipo de combustível inválido. Por favor, digite 'A' para álcool ou 'G' para gasolina.");
}
if (valorAPagar !== undefined) {
    alert("Valor a ser pago pelo cliente: R$ "+valorAPagar);
}
}
