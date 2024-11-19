alert('Boas vindas ao jogo do número secreto');
let NumeroMaximo =  5000;
let NumeroSecreto = parseInt(Math.random() * NumeroMaximo + 1);
console.log(NumeroSecreto);
let Chute;
let chances = 0;
//Enquanto chute for diferente de Numero secreto continua dando chances

while (NumeroSecreto != Chute) {
    Chute = prompt(`Escolha um número entre 1 e ${NumeroMaximo}`);
    chances ++;
    if(NumeroSecreto == Chute){
      // break;  
    } 
    else {
        if (NumeroSecreto < Chute) {
            alert(`O número secreto é menor que ${Chute}`);
           
        }else {
            alert (`O número secreto é maior que ${Chute}`);
        } 
    }   
} 
let palavraChances = chances > 1? 'tentativas':'tentativa';
alert(`Você acertou o número secreto ${NumeroSecreto}, em ${chances} ${palavraChances}`);
document.addEventListener('DOMContentLoaded', () => {
    let h2Element = document.querySelector('.container__texto h2');
    if (h2Element) {
        h2Element.innerHTML = `${NumeroSecreto}`;
    }
});
