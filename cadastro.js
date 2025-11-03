function verificador() {
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const senha = document.getElementById("senha").value
    const resultado = document.getElementById("verificar");
    if(!nome || !email || !telefone || !senha) {
        resultado.textContent = "Preencha o formulário";
    }else{ 
        document.getElementById("butao").addEventListener("click", function() {
    window.location.href = "Login.html"; 
    alert(`Cadastro feito com sucesso`)
});
    }

}
