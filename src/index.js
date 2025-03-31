let nomeDoHeroi = "Homem Aranha"
let quantidadeDeXp = 3255

if(quantidadeDeXp <= 1000) {
    console.log("Ferro")    
}
else if(quantidadeDeXp >= 1001 && quantidadeDeXp <=2000) {
    console.log("Bronze")
}
else if(quantidadeDeXp >= 2001 && quantidadeDeXp <=5000) {
    console.log("Prata")
}
else if(quantidadeDeXp >= 5001 && quantidadeDeXp <=7000) {
    console.log("Ouro")
}   
else if(quantidadeDeXp >= 7001 && quantidadeDeXp <=8000) {
    console.log("Platina")
}
else if(quantidadeDeXp >= 8001 && quantidadeDeXp <=9000) {
    console.log("Ascendente")
}
else if(quantidadeDeXp >= 9001 && quantidadeDeXp <=10000) {
    console.log("Imortal")
}
else if(quantidadeDeXp >= 10001) {  
    console.log("Radiante")
}

console.log ("O Herói de nome " + nomeDoHeroi + " está no nível " + quantidadeDeXp)