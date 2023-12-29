function executarExercicio474e(){
    alert("Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o referido cálculo. Lembre-se de que a variável A deve ser diferente de zero. ")

let a = parseFloat(prompt("Digite o primeiro valor: "))
let b = parseFloat(prompt("Digite o segundo valor: "))
let c = parseFloat(prompt("Digite o terceiro valor: "))
let delta = b**2 - 4*a*c

if (a==0){
    alert("Sua equação é de primeiro grau.")
    let resultado = -1*(c) / b
    alert("O resultado da sua equação de primeiro grau é: "+resultado)
}

else if (delta >= 0){
    let x1 = (-b+ Math.sqrt(delta)) / (2*a)
    let x2 = (-b- Math.sqrt(delta)) / (a*2)

    alert("O resultado da sua equação somando, é igual a: "+x1)
    alert("O resultado da sua equação somando, é igual a: "+x2)
}
else {
    alert("Sua equação não possui raízes reais.")
}
}