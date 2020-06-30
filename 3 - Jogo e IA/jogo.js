var changeStates = true;
var cnv = document.querySelector("canvas");
var player1 = {
x: 15,
y: 10,
v: 5
};
var fruta1 = {
x: 20,
y: 30    
}
var conjuntoUniversoObjetos = [player1,fruta1]
window.addEventListener("keydown",keyDownHandler);
var direita  = ()=>{player1.x = player1.x + player1.v} 
var esquerda = ()=>{player1.x = player1.x - player1.v}
var cima     = ()=>{player1.y = player1.y + player1.v}
var baixo    = ()=>{player1.y = player1.y - player1.v}
var teclasDeMovimentacao = [39,68,37,65,40,83,38,87];
var trilhaSonoraLancada = false

//Declaração das funções
function keyDownHandler(e){
    movimentar(e)
    lancarTrilhaSonora()
}

function movimentar(e){
    if(e.keyCode == 39 || e.keyCode == 68)
        direita();  
        else
    if(e.keyCode == 37 || e.keyCode == 65)
        esquerda();
        else
    if(e.keyCode == 40 || e.keyCode == 83)
        cima();
        else
    if(e.keyCode == 38 || e.keyCode == 87)
        baixo();
    teclasDeMovimentacao.forEach((item)=>{ 
                                if(item == e.keyCode)
                                    changeStates = true;
    });
}

function render(){
    let ctx = cnv.getContext("2d");
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    conjuntoUniversoObjetos.forEach((item)=>{
    if (item == fruta1) 
        ctx.fillStyle = "#FF0000"
    else
        ctx.fillStyle = "#000000"
    ctx.fillRect(item.x, item.y, 20,10)
    })
    changeStates = false;
}

function update(){
    requestAnimationFrame(update, cnv);
    if (changeStates)
        render();
}

function lancarTrilhaSonora(){
    if (!trilhaSonoraLancada){
        playSound("TrilhaSonoraPrincipal.mp3");
        trilhaSonoraLancada = true;
    }
}

function playSound(dvd){
    let audio1 = new Audio();
    audio1.src = dvd;
    audio1.play();
    audio1.onended = ()=>{playSound(dvd)}
}

update()