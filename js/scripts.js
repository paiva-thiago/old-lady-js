/** Vamos criar uma variável para identificar quem vai para o campo, X ou O. Começaremos com X. */
var jogadorAtivo = 'X';

/**
 * Vamos criar agora uma função para preencher o campo. O this ('isto' em inglês) é o elemento HTML (no caso, o quadro) que será atrelado à função.
 * innerHTML é o conteúdo entre as tags do elemento HTML relacionado. Vamos chamar este cara lá embaixo:
 */
function jogar(){
    //Primeiro, não posso preencher um campo que já foi utilizado, logo eu devo verificar se ele é diferente de 'X' E diferente de O
    if((this.innerHTML!='X')&&(this.innerHTML!='O')){
        this.innerHTML=jogadorAtivo;
        /** Jogada feita, vamos alternar o jogador com uma estrutura condicional */
        if(jogadorAtivo==='X'){
            jogadorAtivo='O';
        }else{
            jogadorAtivo='X';
        }
    }
}

/** 
 * Agora, vamos botar o Document Object Model para funcionar. Ele visualiza cada elemento do HTML como um objeto. Por exemplo:
 * document me retornará o <body> todo
 * document.getElementById('item') me retornará o elemento com o atributo id igual a 'item'. Se não tiver nenhum me retornará undefined.
 *  
 * E temos uma forma para atrelar eventos ao elemento, usando o addEventListener. Ele tem dois parâmetros, uma string que identifica o evento e uma função que atrela ao mesmo.
 * 
 * Vamos jogar nos caras. Depois vamos ver uma forma bem mais simples com outros métodos do DOM
*/

document.getElementById('velha-1-1').addEventListener('click',jogar);
document.getElementById('velha-1-2').addEventListener('click',jogar);
document.getElementById('velha-1-3').addEventListener('click',jogar);
document.getElementById('velha-2-1').addEventListener('click',jogar);
document.getElementById('velha-2-2').addEventListener('click',jogar);
document.getElementById('velha-2-3').addEventListener('click',jogar);
document.getElementById('velha-3-1').addEventListener('click',jogar);
document.getElementById('velha-3-2').addEventListener('click',jogar);
document.getElementById('velha-3-3').addEventListener('click',jogar);
/**
 * Com isso, nosso quadro já pode ser preenchido, mas precisamos pensar em como terminar. Quando um jogo da velha termina? Como eu aplico esta condição no Javascript?
 * Dica para isto: Vamos lembrar do conceito de matrizes. Uma matriz 3x3 é familiar com nosso tabuleiro?
 */

