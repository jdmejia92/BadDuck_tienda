function validarFormulario(event) {
  event.preventDefault(); // Previene el envío del formulario automáticamente

  // Limpiar mensajes de error previos
  document.getElementById("errorNombre").textContent = "";
  document.getElementById("errorEmail").textContent = "";

  // Obtener los valores del formulario
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var esValido = true;

  // Validar que el campo de nombre no esté vacío
  if (nombre === "") {
      document.getElementById("errorNombre").textContent = "Por favor, ingresa tu nombre.";
      esValido = false;
  }

  // Validar que el campo de correo electrónico no esté vacío y tenga un formato válido
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
      document.getElementById("errorEmail").textContent = "Por favor, ingresa tu correo electrónico.";
      esValido = false;
  } else if (!emailRegex.test(email)) {
      document.getElementById("errorEmail").textContent = "Por favor, introduce un correo electrónico válido.";
      esValido = false;
  }

  // Si todo es correcto, redirigir a la página de confirmación
  if (esValido) {
      window.location.href = "confirmacion.html";
  }
}