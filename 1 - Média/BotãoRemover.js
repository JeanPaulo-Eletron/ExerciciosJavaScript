document.getElementById("RemoverInputMedia").setAttribute('onclick','rmvElemento("InputDeMedia")');   
function rmvElemento(NomeDiv) {
    count = document.querySelectorAll(".DivMedia").length;
    if(count>2){
      console.log(count);
      if(count>2){
        var ultimaDiv = document.querySelectorAll(".DivMedia")[count-1];
        ultimaDiv.parentNode.removeChild(ultimaDiv);
      }
    }
}
