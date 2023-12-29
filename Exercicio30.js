function executarExercicio30(){
alert("Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente. ")

let a = parseFloat(prompt("Digite o primeiro valor. "))
let b = parseFloat(prompt("Digite o segundo valor. "))
let c = parseFloat(prompt("Digite o terceiro valor. "))

if (a < b & b < c){
    alert("A ordem crescente dos valores é: "+a+ "," +b+ "," +c)
}

if (b < a & a < c){
    alert("A ordem crescente dos valores é: "+b+ "," +a+ "," +c)
}

if (c < a & a < b){
    alert("A ordem crescente dos valores é: "+c+ "," +a+ "," +b)
}

if (b < c & c < a){
    alert("A ordem crescente dos valores é: "+b+ "," +c+ "," +a)
}

if (a < c & c < b){
    alert("A ordem crescente dos valores é: "+a+ "," +c+ "," +b)
}

if (c < b & b < a){
    alert("A ordem crescente dos valores é: "+c+ "," +b+ "," +a)
}


}