function executarExercicio31(){
alert("Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. ")

let a= parseFloat(prompt("Digite a primeira medida: "))
let b = parseFloat(prompt("Digite a segunda medida: "))
let c = parseFloat(prompt("Digite a terceira medida: "))

if (a + b > c){
    if (a+c>b){
        if (b+c>a){
            alert("A medidas formam um triângulo. ")
        }
    }
}
else{
    alert("As medidas não formam um triângulo. ")
}
}
