function validar() {

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var mensagem = document.getElementById("mensagem");

    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
        return;
    }
    if (email.value == "") {
        alert("Email não informado");
        email.focus();
        return;
    }
    if (mensagem.value == "") {
        alert("Mensagem não informada");
        mensagem.focus();
        return;
    }
    alert("Mensagem enviada com sucesso!");
    
}