
//javascript output
//Usar o documnet.write depois de o documneto html já ter sido carregado ele ira sobrepor todo o elemento
//Nomes devem começar com letras $ ou _ 
//variaves são case sensetive entãi A é diferente de a 
let z,x,y;
x=10;
y=20;
z=x+y;

document.getElementById("demo").innerHTML = "o valor da soma de x + y é "+ z + ".";
