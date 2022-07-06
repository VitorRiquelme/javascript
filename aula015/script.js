function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById("txtnano")
   var res = document.getElementById("res")
   if(fano.value.length == 0 || fano.value > ano ) {
    window.alert("verifique os dados e tente novamente")
   }
   else{
    var fsex= document.getElementsByName("radisex")
    var idade = ano - Number(fano.value)
    var genero = ""
    var img = document.createElement("img")
    img.setAttribute("id", "imgem")
    if(fsex[0].checked) {
        genero = "Homem"
        if(idade >=0 && idade < 10) {
            //criança
            img.setAttribute("src", "criança-homem.jpg")
        }
        else if( idade < 21) {
            //jovem
            img.setAttribute("src", "jovem-homem.jpg")
        }
        else if(idade < 50){
            //adulto
            img.setAttribute("src", "alduto-homem.jpg")
        }
        else{
            //idoso
            img.setAttribute("src","veio.jpg")
        }
    }
    else if(fsex[1].checked) {
        genero = "Mulher"
        if(idade >=0 && idade < 10) {
            //criança
            img.setAttribute("src","criança-mulher.jpg")
        }
        else if(idade >= 10 && idade < 21) {
            //jovem
            img.setAttribute("src","jovem-mulher.jpg")
        }
        else if(idade < 50){
            //adulto
            img.setAttribute("src","adulta-mulher (1).jpg")
        }
        else{
            //idoso
            img.setAttribute("src","veia.jpg")
        }
    }
    res.style.textAlign = "center"
    res.innerHTML = `detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
   }
}