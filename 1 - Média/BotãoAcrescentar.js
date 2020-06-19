var BtnAcrescentar = document.getElementById("AcrescentarInputMedia");
BtnAcrescentar.setAttribute('onclick','adcElemento("InputDeMedia")');   
function adcElemento (NomeInput) { 
  QtdeBtnAcrescentar = document.querySelectorAll(".DivMedia").length;
  console.log(QtdeBtnAcrescentar);
  var conteudoNovo = document.createElement("div"); 
  var InputNovo = document.createElement("input"); 
  InputNovo.setAttribute('Class','InputMedia');
  conteudoNovo.appendChild(InputNovo); //adiciona o nó de texto à nova 
  conteudoNovo.setAttribute('Class', 'DivMedia');
  conteudoNovo.setAttribute('id', NomeInput.toString()+(QtdeBtnAcrescentar+1));
  var divAtual = document.getElementById("InputsDeMedia");  
  divAtual.appendChild(conteudoNovo);
}
