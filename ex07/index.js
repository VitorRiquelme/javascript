var variavel1 = prompt('Digite algum numero: ')
var variavel2 = prompt('Digite outro numero: ')

//ParseInt para converte uma string em um número inteiro
/*variavel1 = parseInt(variavel1)
variavel2 = parseInt(variavel2)*/

//Parse float preserva a fração (caso tenho) do valor nùmerico enquanto o parseInt retira essa fração
variavel1 = parseFloat(variavel1)
variavel2 = parseFloat(variavel2)

document.write(variavel1 + variavel2)