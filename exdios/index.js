
//javascript output
//Usar o documnet.write depois de o documneto html já ter sido carregado ele ira sobrepor todo o elemento
//Nomes devem começar com letras $ ou _ 
//variaves são case sensetive entãi A é diferente de a 
/*let z,x,y;
x=10;
y=20;
z=x+y;

document.getElementById("demo").innerHTML = "o valor da soma de x + y é "+ z + ".";*/

//Você não pode redeclara a variavel let let = john; let =x; nao pode
//Já com var voce pode redeclarar a variavael var=john; var=x; pode
/* variaves LET criados dentro de escopo de bloco não podem ser acessados pelo escopo global ex:
 function amigo(fodase){
  let =x;
 };

 Já a variavel var pode ser acessada pelo escopo global mesmo sendo criada dentro deum escopo de bloco ex:
 function amigo(fodase){
  var =x;
 };

 Variaves declaradas com var podem ser redeclaradas mesmo com escopo de bloco ex:
var = y;
 function fodase(){
  var =x;
 };

 Aqui ela estara valendo como x e não y

 Já usando a variavel let isso não é possivel pois uma variavel definida dentro de um escopo de bloco ão pode ser acessado pelo escopo global ex:

 let vitor =2;

 function(){
  let vitor = 3;
 };
 
 Aque ela estara vealendo com 2 e não 3

 Const

 variaves declaradas com const não podem ser redeclaradas;
 variaves declaradas com const não podem ser renomeadas;
 variaves declaradas com const tem escopo de bloco;
 Variaves declaradas com const precisam que um valor seja atribuido no momneto em que forem declaradas]


correto
 const vitor = 12
 
 errado
 conts vitor 
 vitor =12
  

 Sempre usar const quando voce tiver certeza que a variavel nao pode ser mudada

 use const quando voce declarar um novo :
 Array
 Obejeto
 Function

 Voce pode mudar os elemnetos do array mas nao a constante array
 ex:
 const carro = [Toyta,audi,ferrari]

 voce pode adicionar elementos

 carro[0] = fusca

 constante tem escopo de bloco igual let entao

 variaves dentro de um escopo sao diferentes das de fora do escopo

 function(){
  const x = 2
 }

 const x = 10 

 diferentes aqui fora o x=10 e 
 

//Objetos
//É uma pratica comum defenir obejtos com a variavel const
 const carro = {tipo:"fiat", modelo:"300", cor:"azul"};

 //Também pode ser escrito dessa maneira
 const pessoa ={
  nome:"vitor",
  sobrenome:"riquelme", 
  idade:20
};
//nome é a propriedade e vitor é o valor da propriedade
//Metodo de um objeto é uma função amarzenada como um valor de uma propriedade
 console.log(pessoa.nome, pessoa.sobrenome)

 const pessoa = {
  nome:"Vitor",
   idade:20,
   sobrenome:"Riquelme",
   nomecompleto : function(){
    return this.nome + " " + this.sobrenome;
   }
  };

  document.getElementById("demo").innerHTML = pessoa.nomecompleto(); 

  
function mult(a,b){
  return a*b
}
 console.log(mult(2,4))*/

 //javascript strings são usadas para armazenar e manipular textos 
/*propriedade length para ver o tamanho da string
 let texto =  "ABCDEFGHIJKLMNOPQRSTUVXwYZ"
 let tamanho = texto.length

 console.log(tamanho)*/
  // a \" \" insere aspas duplas na frase sendo assim \' \' inseri aspas simples na fraase
 /*function myFunction(){
  let texto = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = texto.replace("Ola", "vai tomar no cu tranquilo");
 }
 let texto = "Gatos são foofs eu amo gatos e gatinhos fofinhos";
  texto = texto.replaceAll("Gatos","Cachorros");
  texto = texto.replaceAll("gatos","cachorros");
  texto = texto.replaceAll("gatinhos","cachorrinhos");

console.log(texto);

let texto  = "vitor riquelme"
texto = texto.toUpperCase()
console.log(texto)
let text1 = "ola meu amigo chamado"
let texto = "vitor riquelme oliverira mendes o melhor do mundo graças a adeus pai"
let text3 = text1.concat(" ", texto)
console.log(text3)

let texto = "vitor irqulme loaisdasdm"
let vito = texto.charAt(4)

console.log(vito)

let texto = "conheci um viado chamada vitor é um cara engraçado, porém vitor também é estranho"
let vitor = texto.lastIndexOf("vitor")
console.log(vitor)*/



 

