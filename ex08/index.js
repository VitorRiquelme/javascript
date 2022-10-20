//Operadores lógicos:
//E (&&) -  Verdadeiro se todas as expressões forem verdadeiras
//Ou  (||)- verdadeiro se pelo menos uma das expressões forem verdaedeiras
//Negação (!) - inverte o resultado da expressão de comparação
if(2==2 && 3>=1 && 'a' == 'b'){//&& precisa que TODAS as expressões sejam verdadeiras para retornar true
  document.write('igual')
}else(
  document.write('nada haver ')
)
if(3==3 || 1>=2 || 'q' == 'b'){ // || só precisa que uma das expressões sejam verdadeiras para retornar true
  document.write('certissimo irmao')
}else(
  document.write('que isso nada haver')
)
if(!(1>2)){//!() Inverte o valor da expressão para false caso seja true e vise e versa
  document.write('sou gay')
}else(
  document.write('iAE')
)