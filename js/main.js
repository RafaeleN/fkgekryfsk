window.onload =function(){

let nome = prompt("Qual es su nombre?")

let mBoasVindas.textContent = document.getElementById("meu-titulo")

if (nome) {
    mBoasVindas.textContent ="Bien vindo" + nome + "!";

}

else {
    mBoasVindas.textContent ="Bien vindo, loco";

}
 
}