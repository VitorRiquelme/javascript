function mudacor(obj,cor){
    obj.style.backgroundColor=cor
}

function mudapos(obj){
    obj.style.position="absolute"
    obj.style.left=Math.random()*500+"px"
    obj.style.top=Math.random()*500+"px"
}

function ola(){
    let dat= new Date()
    let hora = dat.getHours()
    let res=""
   if(hora<12){
     res="bom dia"
   }else if(hora<17){
     res="boa tarde"
   }else{
     res="boa noite"
   }alert("olá " + res)
}