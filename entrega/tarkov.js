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
    // Obtener el color seleccionado
    var color = document.getElementsByName('colorElegido')[0].value;

    // Obtener el tamaño seleccionado
    var tam = document.getElementsByName('tamFuente')[0];
    var tamElegido = tam[tam.selectedIndex].value;

    // Guardar el tamaño y color seleccionados en localStorage
    window.localStorage.setItem('tamFuenteGuardado', tamElegido);
    window.localStorage.setItem('colorGuardado', color);

    // Cambiar el color de los elementos
    var elements = document.querySelectorAll('section p');
    elements.forEach(function(element) {
        element.style.color = color;
    });

    // Aplicar el tamaño a todo el documento
    document.documentElement.style.fontSize = parseFloat(tamElegido) + 'rem';
    document.documentElement.style.setProperty('--colorNormal', color);

    document.getElementById('mensaje').innerHTML = 'Este mensaje muestra el tipo de tamaño y color del texto del contenido de section, solo se almacenará en la página el tamaño, para no romper la estética de la web.';
    console.log(color);
    console.log(tamElegido);
}

document.addEventListener('DOMContentLoaded', function() {
    // Leer el tamaño y color guardados en localStorage
    var tamGuardado = window.localStorage.getItem('tamFuenteGuardado');
    var colorGuardado = window.localStorage.getItem('colorGuardado');

    if (tamGuardado) {
        // Aplicar el tamaño guardado al estilo CSS
        document.documentElement.style.fontSize = parseFloat(tamGuardado) + 'rem';

        // Actualizar la selección en el elemento <select>
        var tam = document.getElementsByName('tamFuente')[0];
        for (var i = 0; i < tam.options.length; i++) {
            if (tam.options[i].value === tamGuardado) {
                tam.selectedIndex = i;
                break;
            }
        }
    }
if (colorGuardado) {
        // Cambiar el color de los elementos
        var elements = document.querySelectorAll('section p');
        elements.forEach(function(element) {
            element.style.color = colorGuardado;
        });

        // Aplicar el color al estilo CSS
        document.documentElement.style.setProperty('--colorNormal', colorGuardado);
    }
});
