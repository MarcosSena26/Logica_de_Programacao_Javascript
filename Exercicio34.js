function executarExercicio34(){
alert("Seja o seguinte algoritmo: início ler x ler y z  (x*y) + 5 se z <= 0 então resposta  'A' senão se z <= 100 então resposta  'B'senão resposta  'C'   	fim_se  	fim_se escrever  z, resposta")

let x = parseInt(prompt("Digite o primeiro valor: "))
let y = parseInt(prompt("Digite o segundo valor: "))

let z = (x * y) + 5

if (z <= 0){
    alert("Resposta A: "+z)
}

else if (z <=100){
    alert("Resposta B: "+z)
}

    else{
        alert("Resposta C: "+z)
    }

}