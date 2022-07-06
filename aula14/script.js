
function carregar(){
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imgem")
var data = new Date ()
var hora = data.getHours()
msg.innerHTML= `agora são ${hora} horas `
if(hora >= 0 && hora < 12){
    //bom dia
    img.src = "pexels-artur-roman-1167355.jpg"
    document.body.style.background = "#e2cd9f"
}
else if (hora >=12 && hora <18){
    //boa tarde
    img.src = "tardefoto.png"
    document.body.style.background = "#b9846f"
}
else{
    //boa noite
    img.src = "pexels-enrico-perini-705425.jpg"
    document.body.style.background = "#515154"
}
}