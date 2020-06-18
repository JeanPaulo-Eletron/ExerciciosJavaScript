for(i=0; i<2; i++)
    document.onload = adcElemento("InputDeMedia");
var BtnAcrescentar = document.getElementById("AcrescentarInputMedia");
BtnAcrescentar.setAttribute('onclick','adcElemento("InputDeMedia")');   
function adcElemento (NomeDiv) { 
  QtdeBtnAcrescentar = 1;
  do{
    var selDiv = document.getElementById(NomeDiv+String(QtdeBtnAcrescentar));
    QtdeBtnAcrescentar++;
    } while(selDiv != null);
  QtdeBtnAcrescentar--;
  console.log(QtdeBtnAcrescentar);
  var InputNovo = document.createElement("div"); 
  var conteudoNovo = document.createElement("input"); 
  InputNovo.appendChild(conteudoNovo); //adiciona o nó de texto à nova 
  InputNovo.setAttribute('Class', 'InputMedia');
  InputNovo.setAttribute('id', NomeDiv.toString()+QtdeBtnAcrescentar);
  var divAtual = document.getElementById("InputsDeMedia");  
  divAtual.appendChild(InputNovo);
}

// adiciona o novo elemento criado e seu conteúdo ao DOM 
//  document.body.insertBefore(divNova, divAtual.nextSibling);