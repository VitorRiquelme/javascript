var nome = prompt('Digite seu nome')
var altura = prompt('Digite qual a sua altura')
var peso = prompt('Digite seu peso')
var m = 

altura = parseFloat(altura)
peso = parseFloat(peso)

altura = altura/100

m = peso / (altura * altura)

if(m <16){
  document.write(nome + ' sua massa é ' + m + ' É um baixo peso muito grave')
}else if(m>=16 && m<=16.99){
  document.write(nome + ' sua masse é ' + m + ' É um baixo peso grave')
}else if (m>=17 && m<=18.49){
  document.write(nome + ' sua masse é ' + m + ' É um baixo peso')
}else if(m>=18.50 && m<=24.99){
  document.write(nome + ' sua masse é ' + m + ' É um peso normal')
}else if(m>=25 && m<=29.99){
  document.write(nome + ' sua masse é ' + m + ' Sobrepeso')
}else if(m>=30 && m<=34.99){
  document.write(nome + ' sua masse é ' + m + ' Obesidade grau 1')
}else if(m>=35 && m<=39.99){
  document.write(nome + ' sua masse é ' + m + ' Obesidade grau 2')
}else if (m>=40){
  document.write(nome + ' sua masse é ' + m + ' Obesidade grau 3')
}


