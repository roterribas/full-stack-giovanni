const form = document.querySelector("form");
const lista = document.querySelector(".lista");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("telefone");
const listaMsg = document.querySelector(".lista-msg");


form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Validação do formulário
    if (inputNome.value == "" || inputEmail.value == "" || inputTel.value == "") {
        alert("Digite seus dados");
        return false;
    }

    // Condição, para retirar a li > .lista-msg
    if (listaMsg) {
        listaMsg.remove();
    }

    // Criando botão Excluir
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.className = "btn-delete";

    // Criar LI
    const li = document.createElement("li");

    // Criando uma função para excluir
    btnExcluir.addEventListener("click", function() {
        const confirmar = confirm("Tem certeza que deseja excluir o contato?");

        if (confirmar) {
            li.remove();
        }
    });

    li.innerHTML = `
        <span class="contato-nome">${inputNome.value}</span>
        <span class="contato-email">${inputEmail.value}</span>
        <span class="contato-telefone">${inputTel.value}</span>
    `;

    // appendChild()
    lista.appendChild(li)
    li.appendChild(btnExcluir)
    
    // Limpar inputs
    form.reset();

})
