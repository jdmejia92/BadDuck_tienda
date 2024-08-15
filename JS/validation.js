function validarFormulario(event) {
    event.preventDefault(); // Previene el envío del formulario automáticamente

  // Limpiar mensajes de error previos
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorTelefono").textContent = "";

  // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var esValido = true;

  // Validar que el campo de nombre no esté vacío
    var nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (nombre === "") {
        document.getElementById("errorNombre").textContent = "Este campo no puede estar vacio.";
        esValido = false;
    } else if (!nombreRegex.test(nombre)) {
        document.getElementById("errorNombre").textContent = "El nombre no debe contener números o caracteres especiales.";
        esValido = false;
    }

  // Validar que el campo de correo electrónico no esté vacío y tenga un formato válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("errorEmail").textContent = "Este campo no puede estar vacio.";
        esValido = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").textContent = "Se debe ingresar un email valido.";
        esValido = false;
    }

    // Validar que el campo de teléfono no esté vacío y tenga un formato válido
    var telefonoRegex = /^[0-9]{9,15}$/; // Acepta números de teléfono de 9 a 15 dígitos
    if (telefono === "") {
        document.getElementById("errorTelefono").textContent = "Este campo no puede estar vacio.";
        esValido = false;
    } else if (!telefonoRegex.test(telefono)) {
        document.getElementById("errorTelefono").textContent = "Solo debe ingresar números.";
        esValido = false;
    }

    // Si todo es correcto, redirigir a la página de confirmación
    if (esValido) {
        window.location.href = "confirmacion.html";
    }
}