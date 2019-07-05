var jogadorAtivo = 'X';
/*  Criei esse booleano para identificar se o jogo acabou - ele vai acabar se encontrar um vencedor ou não houver mais espaços para preencher 
    vamos alterar lá embaixo esse cara! */
var fim = false;
/**
 * Vamos pensar em coordenadas linha/coluna: Quais são as sequências de 3 coordenadas que apontam para um vencedor? Vamos checar e colocar abaixo em uma constante:
 * 
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
 * E aqui vamos usar nosso vetor de coordenadas.
 * Vou pegar cada sequência, e cada linha e coluna dos campos, e comparar se os valores são iguais. Se sim, eu finalizo o jogo .
 * 
 */
function checarVencedor(){
    for(let jogo  = 0; jogo<winningCoords.length; jogo++){
        let coordenada     = winningCoords[jogo];
        let linha  = coordenada[0][0];
        let coluna = coordenada[0][1];
        let valor  = tabuleiro[linha][coluna];
        if(valor!==null){
            let linha2 = coordenada[1][0];
            let coluna2 = coordenada[1][1];
            let linha3 =coordenada[2][0];
            let coluna3 = coordenada[2][1];
            let valor2 = tabuleiro[linha2][coluna2];
            let valor3 = tabuleiro[linha3][coluna3];
            if((valor===valor2)&&(valor===valor3)){
                fim=true;
                return valor;
            }
        }
    }
    return '';
}
function jogoAcabou(){
    for(let l=0;l<tabuleiro.length;l++){
        for(let c=0;c<tabuleiro[l].length;c++){
            if(tabuleiro[l][c]===null){
                return false;
            }
        }
    }
    fim=true;
    return fim;
}
function linhaColunaDoClicado(elemento){
    let id = elemento.getAttribute('id');
    let separados = id.split('-');
    separados.shift();
    return separados;
}
function jogar(){
    //Aqui coloquei mais uma condição - não basta estar vazio, o jogo não pode ter terminado!
    if((!fim)&&((this.innerHTML!='X')&&(this.innerHTML!='O'))){
        this.innerHTML=jogadorAtivo;
        let linhaColuna = linhaColunaDoClicado(this);
        let linha   = linhaColuna[0];
        let coluna  = linhaColuna[1];
        tabuleiro[linha][coluna]=jogadorAtivo;
        let vencedor = checarVencedor();
        if(vencedor!=''){
            if (window.confirm(vencedor+' ganhou! \n Deseja jogar novamente?')===true){
                location.reload();
            }else{
                let velhas = document.getElementsByClassName('velha-field');
                for(let x=0;x<velhas.length;x++){
                    velhas[x].addEventListener('click',function(){});
                }
            }
        }else if(jogoAcabou()){
            alert('Sem Vencedor :(');
        }else{
            jogadorAtivo = ((jogadorAtivo==='X') ? 'O' : 'X');            
        }
        
    }
}

var velhas = document.getElementsByClassName('velha-field');
for(let x=0;x<velhas.length;x++){
    velhas[x].addEventListener('click',jogar);
}
