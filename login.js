function mostrarLogin() {
  const area = document.getElementById("loginArea");
  area.style.display = area.style.display === "none" ? "block" : "none";
}

function verificarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // Credenciais fixas
  const usuarioCorreto = "jamili";
  const senhaCorreta = "8488614173";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    // Redireciona para o painel de administração
    window.location.href = "painel.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
}
