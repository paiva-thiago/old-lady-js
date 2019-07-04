var jogadorAtivo = 'X';
/**
 * Lembra que falamos da matriz no último commit? pois bem, vamos criar. Se você não conseguiu pensar numa forma de resolver, talvez visualizando a matriz abaixo fique mais fácil :)
 * Por enquanto vamos fazer uma função para verificar se o jogo acabou, depois vamos aplicar quem ganhou.
 */
var tabuleiro = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]
/** A função vai varrer o tabuleiro procurando por algum valor com null se tiver, o jogo não acabou */
function jogoAcabou(){
    for(let l=0;l<tabuleiro.length;l++){
        for(let c=0;c<tabuleiro[l].length;c++){
            console.log(l+'-'+c+'='+tabuleiro[l][c]);
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
        console.log(JSON.stringify(linhaColuna));
        let linha   = linhaColuna[0];
        let coluna  = linhaColuna[1];
        tabuleiro[linha][coluna]=jogadorAtivo;
        console.log(tabuleiro);
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
