var nome = prompt('Digite seu nome')
var altura = prompt('Digite qual a sua altura')
var peso = prompt('Digite seu peso')
var m = null

altura = parseFloat(altura)
peso = parseFloat(peso)

altura = altura/100

m = peso / (altura * altura)

document.write(nome+ 'Sua massa é ' + m)
