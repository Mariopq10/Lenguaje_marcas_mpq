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

function aplicarCambios() {
    // mostramos en consola los valores recogidos en la pagina
    var color = document.getElementsByName('colorElegido')[0];
    console.log('color elegido ' + color.value);

    var tam = document.getElementsByName('tamFuente')[0];
    var tamelegido = tam[tam.selectedIndex].value;

    // aplicamos el color y el tamaño a todo el documento
    document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
    document.documentElement.style.setProperty("--colorNormal", color.value);
    document.getElementById('mensaje').innerHTML = "Este ajuste solo sirve para el contenido de la página.";
}