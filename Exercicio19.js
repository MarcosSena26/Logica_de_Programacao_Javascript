function executarExercicio19(){
    
 alert("Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.")

 let numero = parseInt(prompt("Digite o primeiro valor: "))
 let numero1 = parseInt(prompt("Digite o segundo valor: "))

 if (numero > numero1) {
    alert("O primeiro valor digitado é maior.")
 }

 if  (numero == numero1) {
    alert("Os números digitados são iguais.")
 }

 else {
    alert("O segundo valor digitado é maior.")
 }

}