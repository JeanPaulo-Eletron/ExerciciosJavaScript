function CalcularMedia(){
    var Inputs = document.getElementById("InputsDeMedia").querySelectorAll(".InputMedia");
    var Count  = Inputs.length;
    var somatorio = 0;
    console.log("Qtde:" + Count.toString());
    for(i = 0; i < Count; i++ )
      somatorio += parseInt(Inputs[i].value);
    var media = somatorio / Count;
    if (media.toString() != "NaN")
      alert("A média é: "+media.toString());
}
