function verificador2() {
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const resultado = document.getElementById("verificar");
    if(!email || !senha) {
        resultado.textContent = "Preencha o login";
    }else{
        document.getElementById("botao").addEventListener("click", function() {
    window.location.href = "index.html"; 
    alert(`Login feito com sucesso`)
});
    }
}