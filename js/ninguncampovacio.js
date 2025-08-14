const regBtn = document.getElementById("regBtn");

regBtn.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const password1 = document.getElementById("password1").value.trim();
  const password2 = document.getElementById("password2").value.trim();
  const terminos = document.getElementById("terminos").checked;

  // Verificar que todos los campos tengan algún valor y que el checkbox esté marcado
  const todosLlenos = nombre && apellido && email && password1 && password2 && terminos;

  if (todosLlenos) {
    // Mostrar alerta de éxito
    document.getElementById("alert-success").classList.add("show");
    document.getElementById("alert-danger").classList.remove("show");
  } else {
    // Mostrar alerta de error
    document.getElementById("alert-danger").classList.add("show");
    document.getElementById("alert-success").classList.remove("show");
  }
});
