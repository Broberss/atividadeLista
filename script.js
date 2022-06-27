// Cria um botão de deletar e o adiciona a cada item da lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "fechar";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Funcionalidade do botão de deletar
var fechar = document.getElementsByClassName("fechar");
var i;
for (i = 0; i < fechar.length; i++) {
  fechar[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Funcionalidade da lista
function novoItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputTarefas").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Não é possível adicionar uma tarefa vazia!");
  } else {
    document.getElementById("listaItens").appendChild(li);
  }
  document.getElementById("inputTarefas").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "fechar";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < fechar.length; i++) {
    fechar[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
