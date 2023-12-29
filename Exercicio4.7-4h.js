function executarExercicio474h(){

alert("Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores. ")

let contador = 0;
let maior;
let menor;

while (contador < 5) {
  let numero = parseInt(prompt("Digite um número inteiro: "));

  if (contador === 0) {
    maior = numero;
    menor = numero;
  } else {
    if (numero > maior) {
      maior = numero;
    }
    if (numero < menor) {
      menor = numero;
    }
  }

  contador++;
}

alert("O maior número é: " + maior);
alert("O menor número é: " + menor);
}