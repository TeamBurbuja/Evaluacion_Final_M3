/**
 * Implementación de funciones para validar datos, formato de fecha y conteo regresivo de caracteres
 * @author The Bubble
 * @version 3.0
 */
$(document).ready(function () {
    // Función para conteo de caracteres
    $(function () {
        // Establece longitud máxima de caracteres
        let longitudMax = 250;
        // Mostramos número máximo al usuario
        $('#contador').html(' (Caracteres restantes: ' + longitudMax + ')');
        // Función que se activa con cada caracter ingresado
        $('#motivo').keyup(function () {
            // Restamos los caracteres ingresados al valor máximo (250)
            let caracteresIngresados = longitudMax - $('#motivo').val().length;
            // Mostramos valor actual de caracteres restantes
            $('#contador').html(' (Caracteres restantes: ' + caracteresIngresados + ')');
            // Validación de valor cercano al límite, cuando le quedan 10 caracteres el texto cambia a color rojo
            if (caracteresIngresados <= 10 && caracteresIngresados >= 0 ) {
                $('#contador').addClass('contador-caracteres');
            } else {
                $('#contador').removeClass('contador-caracteres');
            }
            // Validación de caracteres disponibles agotados o en cero
            if (caracteresIngresados < 1) {
                $('#motivo').keypress(function () {
                    let texto = $('#motivo').val().substr(0,249);
                    $('#motivo').val(texto);
                });
            }
        });
    });
    // Función que se dispara con el boton enviar del formulario
    $('#formulario').submit(function (e) {
        e.preventDefault(); // Previene evento submit antes de validar los campos
        // Declaración de variables
        let idAsesoria = $('#id-asesoria').val();
        let fecha = $('#fecha-asesoria').val().trim();
        let motivo = $('#motivo').val().trim();
        let profesional = $('#profesionales').val();
        // Validaciones de campos vacíos y sus restricciones
        if (idAsesoria == '') {
            alert('El campo ID Asesoría es obligatorio');
            $('#id-asesoria').addClass('error-input');
        } else if (idAsesoria < 1 || idAsesoria > 9999) {
            alert('Ingresa un número entre 1 y 9999');
            $('#id-asesoria').addClass('error-input');
        } else if (!fecha.length) {
            alert('El campo Fecha del evento es obligatorio');
            $('#fecha-asesoria').addClass('error-input');
        } else if (!fechaValida(fecha)) {
            alert('Ingresa formato de fecha correcto DD-MM-AAAA')
        } else if (motivo == '') {
            alert('El campo Motivo es obligatorio');
            $('#motivo').addClass('error-input');
        } else if (profesional == 0) {
            alert('Selecciona un profesional de la lista');
            $('#profesionales').addClass('error-input');
        } else {
            alert('Asesoría ingresada correctamente')
            window.location = 'crear_asesorias.html'
        }
        // Función para validar formato correcto de fecha
        function fechaValida(fecha) { // Recibe la fecha ingresada por usuario
            // Establece el formato aceptado, 2 números un guión, 2 números un guión, 4 números 
            let patron = new RegExp(/\b\d{2}-\d{2}-\d{4}\b/);
            return patron.test(fecha); // Devuelve true si es correcto el formato, en caso contrario devuelve false
        }
    });
});

