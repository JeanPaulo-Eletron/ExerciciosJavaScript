//function isEmpty(obj) {
//    for(var prop in obj) {
//        if(obj.hasOwnProperty(prop))
//            return false;
//    }
//
//    return true;
//}

QtdeBtnAcrescentar = 1;
document.getElementById("RemoverInputMedia").setAttribute('onclick','rmvElemento("InputDeMedia")');   
function rmvElemento(NomeDiv) {
  count = 1;
  do{ 
    var selDiv = document.getElementById(NomeDiv+count);
    if (selDiv != null)
      var ultimaDiv = document.getElementById(NomeDiv+count);
    count++;
  }while(selDiv != null);
  count--;
  console.log(String(count));
  ultimaDiv.parentNode.removeChild(ultimaDiv);
  QtdeBtnAcrescentar++;
}
// adiciona o novo elemento criado e seu conteúdo ao DOM 
//  document.body.insertBefore(divNova, divAtual.nextSibling);