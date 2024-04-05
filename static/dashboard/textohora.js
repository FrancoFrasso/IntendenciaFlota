// Función para obtener la fecha y hora actual en el formato deseado
function obtenerFechaHoraActual() {
    var fechaHora = new Date();
    var dia = fechaHora.getDate();
    var mes = fechaHora.getMonth() + 1; // Los meses comienzan desde 0
    var año = fechaHora.getFullYear();
    var hora = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();

    // Formatear el día y mes para que tengan dos dígitos
    if (dia < 10) {
        dia = '0' + dia;
    }
    if (mes < 10) {
        mes = '0' + mes;
    }

    // Formatear la hora, minutos y segundos para que tengan dos dígitos
    if (hora < 10) {
        hora = '0' + hora;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    if (segundos < 10) {
        segundos = '0' + segundos;
    }

    // Construir la cadena de fecha y hora 
    var fechaHoraActual = dia + '/' + mes + '/' + año + ' ' + hora + ':' + minutos + ':' + segundos;

    return fechaHoraActual;
}

//  actualizar el contenido HTML con la fecha y hora actual
function actualizarFechaHora() {
    var fechaHora = obtenerFechaHoraActual();
    var elementoFechaHora = document.getElementById('fecha-hora');
    if (elementoFechaHora) {
        elementoFechaHora.innerHTML = fechaHora;
    }
}

// Llamar a la función para actualizar la fecha y hora al cargar la página
window.onload = function () {
    actualizarFechaHora();
};