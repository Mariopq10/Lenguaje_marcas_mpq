// Obtener el nombre del usuario desde el localStorage
var nombreUsuario = sessionStorage.getItem('nombreUsuario');

// Verificar si el nombre del usuario está almacenado
if (nombreUsuario) {
    // Mostrar el nombre del usuario en el elemento #nombre-usuario
    document.getElementById('nombre-usuario').textContent = nombreUsuario;
} else {
    // Mostrar "Sin identificar" si el nombre del usuario no está almacenado
    document.getElementById('nombre-usuario').textContent = 'Sin identificar';
}

// En la página de ajustes o donde el usuario pueda ingresar su nombre
function guardarNombreUsuario() {
    // Obtener el valor ingresado por el usuario
    var nuevoNombre = document.getElementById('nombre-input').value;

    // Almacenar el nombre del usuario en el localStorage
    sessionStorage.setItem('nombreUsuario', nuevoNombre);

    // Actualizar el elemento #nombre-usuario con el nuevo nombre
    document.getElementById('nombre-usuario').textContent = nuevoNombre;
}
