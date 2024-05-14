// Obtém o modal
var modal = document.getElementById("modal");

// Obtém o botão que abre o modal
var btn = document.getElementById("myBtn");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Função para salvar o nome digitado
function salvarNome() {
  var nome = document.getElementById("nome").value;
  alert("Olá, " + nome + "! Seja bem-vindo ao nosso site!");
  modal.style.display = "none"; // Fecha o modal após salvar o nome
}
