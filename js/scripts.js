var jogadorAtivo = 'X';
var fim = false;

const coordenadasComVencedor = [
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

function checarVencedor(){
    for(let jogo  = 0; jogo<coordenadasComVencedor.length; jogo++){
        let coordenada     = coordenadasComVencedor[jogo];
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
