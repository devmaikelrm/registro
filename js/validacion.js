function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}
// Validar coincidencia de contraseñas
const password = document.getElementById("password").value;
const password2 = document.getElementById("password2").value;

if (password !== password2) {
    esValido = false; // marca como inválido
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}