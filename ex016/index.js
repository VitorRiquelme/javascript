let variavel = 20
const pi = 3.14 //Const uma vez declarada não consegue mais mudar o valor

console.log(variavel)

variavel = 10 / 10

console.log(variavel)*
 
const precodocombustivel 5;79
const gastomedio = 10
const distancia = 100

let resultado = 100/10*5;79

console.log(resultado)
function digaMeuNome(name){
  console.log('seu nome é ' + name)
}

digaMeuNome('Vitor')

function quadrado(valor){
  return valor*valor
}
let quadradoDeDez = quadrado(12)
console.log('o valor da potencia de dez é ' + quadradoDeDez)

function incrementarJuros(valor, juros){
  let incrementarJuros = (juros/100)*valor
  return valor + incrementarJuros 
}
console.log(incrementarJuros(100,15))

function seuNome(nome){
  console.log('seu nome é ' + nome)
}
seuNome('vitor')

function idade(sua){
  if(sua>=18){
    console.log('voce é maior de idade')
  }else{
    console.log('voce è menor de idade')
  }
}
idade(19)

let vitor = {
  nome : 'vitor riquelme',
  peso : 50+'kg',
  idade : 19,

  descrever : function(){
      console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} e eu peso ${this.peso}`)
  }
}
vitor.descrever()

class pessoa{
  nome 
  idade

  descrever(){
    console.log(`meu nome é ${this.nome} e eu tenho ${this.idade}`)
  }
}

let vitor = new pessoa()
vitor.nome = 'vitor riquelme oliveira mendes'
vitor.idade = 30+' anos'

let lucas = new pessoa()
lucas.nome = 'lucas oliveira mendes'
lucas.idade = 40+' anos'

vitor.descrever()
lucas.descrever()