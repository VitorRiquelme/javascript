let mochila=[],pos

mochila.push("faca")
mochila.push("vinagre")
mochila.push("vagem")
mochila.push("terra")
mochila.push("garrafa")

pos=mochila.indexOf("terra")
if(pos<0){
    console.log("o item não está na mochila")
}else{
    console.log("o item esá na mochila na posição " + pos)
}