var jogadorAtivo = 'X';
/**
 * Lembra que falamos da matriz no último commit? pois bem, vamos criar. Se você não conseguiu pensar numa forma de resolver, talvez visualizando a matriz abaixo fique mais fácil :)
 * Por enquanto vamos fazer uma função para verificar se o jogo acabou, depois vamos aplicar quem ganhou.
 */
const winningCoords = [
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    [[0,0], [1,1], [2,2]],
    [[0,2], [1,1], [2,0]]
]
 var tabuleiro = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

/**
 * Vencedores
 * 00 01 02
 * 10 11 12
 * 20 21 22
 * 00 10 20
 * 01 11 21
 * 
 */
function checarVencedor(){
    for(let jogo  = 0; jogo<winningCoords.length; jogo++){
        let wc     = winningCoords[jogo];
        let linha  = wc[0][0];
        let coluna = wc[0][1];
        let valor  = tabuleiro[linha][coluna];
        if(valor!==null){
            let valor2 = tabuleiro[wc[1][0],wc[1][1]];
            let valor3 = tabuleiro[wc[2][0],wc[2][1]];
            if((valor1===valor2)&&(valor1===valor3)){
                return valor1;
            }
        }
    }
    return '';
}
/** A função vai varrer o tabuleiro procurando por algum valor com null se tiver, o jogo não acabou */
function jogoAcabou(){
    for(let l=0;l<tabuleiro.length;l++){
        for(let c=0;c<tabuleiro[l].length;c++){
            if(tabuleiro[l][c]===null){
                return false;
            }
        }
    }
    return true;
}
//Vamos criar uma função para obter a linha e coluna do elemento clicado. Veja no index.html que no atributo id eu tenho como valor velha-{linha}-{coluna}
//Vamos retornar como um vetor, onde a primeira posição é o numero da linha e a segunda o número da coluna
function linhaColunaDoClicado(elemento){
    //Pego o atributo id através do método getAttribute, (traduzindo, pegar Atributo)
    let id = elemento.getAttribute('id');
    //agora vamos separar os valores pelo traço através do método disponível em valores string chamado split. Ela me retorna um vetor a partir do caracter que eu separei.
    let separados = id.split('-');
    // Com isto, um id 'velha-0-0' me retornará em separados ['velha',0,0]. O primeiro item não será útil, então vou excluir, para que só reste os dois últimos.
    // Vamos usar a função disponível em vetor chamada shift()
    separados.shift();
    return separados;
}
function jogar(){
    //Primeiro, não posso preencher um campo que já foi utilizado, logo eu devo verificar se ele é diferente de 'X' E diferente de O    
    if((this.innerHTML!='X')&&(this.innerHTML!='O')){
        this.innerHTML=jogadorAtivo;
        //Agora vamos atualizar nossa matriz
        let linhaColuna = linhaColunaDoClicado(this);
        let linha   = linhaColuna[0];
        let coluna  = linhaColuna[1];
        tabuleiro[linha][coluna]=jogadorAtivo;
        /** Jogada feita, só vamos alternar o jogador se o jogo acabar */
        if(jogoAcabou()){
            alert('Fim de Jogo! Mas não sei quem ganhou!');
        }else{
            //Agora vamos trocar aquele if por uma estrutura menor chamada OPERADOR TERNÁRIO
            //Ele possui três parâmetros: ({condição} ? {valor se condição for verdadeira} : {valor se condição for falsa} )
            jogadorAtivo = ((jogadorAtivo==='X') ? 'O' : 'X');            
        }
        
    }
}

var velhas = document.getElementsByClassName('velha-field');
for(let x=0;x<velhas.length;x++){
    velhas[x].addEventListener('click',jogar);
}
