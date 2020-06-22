function calcularQuadrado(){
    for(let i = 1; i<= 5; i++){
        var inputX    = document.getElementById("Input"+i);
        var outputX   = document.getElementById("Output"+i);
//        console.log(inputX);
//        console.log(outputX);
        outputX.innerHTML = "Quadrado: " + inputX.value * inputX.value;
    }
}