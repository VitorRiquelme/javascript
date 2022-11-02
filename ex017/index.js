//Arrays e estruturas de repetições em javascript
//Push para adicionar um valor no final da lista
//pop para pear e guarda o ultimo valor da lista
//shift para  pegar e guarda o primeiro valor da lista
//llenght mostra o tamanho da lista

/*nomes.push('renan')

nomes.push(19)

nomes.shift()*/


/*let notas = []

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(2)
notas.push(5)

let media = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]

let nome = 'vitor riquelme oliveira mendes'

for (let i = 0; i <= nome.length; i++) {

  console.log(nome[i])
  
}

let nome = 'vitor riquelme oliveira mendes'
for (let i = 0; i <= nome.length; i++) {
  const letras = nome[i];
  console.log(letras)
}*/

let notas = []

notas.push(5)
notas.push(7)
notas.push(8)
notas.push(2)
notas.push(5)
notas.push(8)

let soma = 0

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota
}
const media = soma / notas.length
console.log(media)


