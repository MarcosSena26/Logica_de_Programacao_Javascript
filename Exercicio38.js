function executarExercicio38(){

alert("Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’. ")

let codigo = 1234
let senha  = 9999

codigo = parseInt(prompt("Digite seu código de usuário: "))

if (codigo != 1234){
    alert("Usuário inválido.")
}

else {
    prompt("Digite sua senha de usuário: ")
}
 if (senha != 9999){
    alert("Senha inválida.")
 }
else {
    alert("Acesso permitido.")
}

}