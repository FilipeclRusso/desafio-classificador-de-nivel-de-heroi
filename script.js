let nomeHeroi = "Fofete";
let qtdeXp = 1001;
let nivel;

if (qtdeXp <= 1000) {
    nivel = "Ferro"
} 
else if (qtdeXp <= 2000) {
    nivel = "Bronze"
} 
else if (qtdeXp <= 5000) {
    nivel = "Prata"
} 
else if (qtdeXp <= 7000) {
    nivel = "Ouro"
} 
else if (qtdeXp <= 8000) {
    nivel = "Platina"
} 
else if (qtdeXp <= 9000) {
    nivel = "Ascedente"
} 
else if (qtdeXp <= 10000) {
    nivel = "Imortal"
} 
else {
    nivel = "Radiante"
}

console.log("O herói " + nomeHeroi + " está no nível " + nivel);