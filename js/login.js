/**
 * Implementación de funciones para validar datos y formato de rut Chileno
 * @author The Bubble
 * @version 3.0
 */
document.addEventListener('DOMContentLoaded', function () {
    // Declaración de variables
    let rutUsuario = document.getElementById('rut');
    let password = document.getElementById('password');
    let rutMensaje = document.getElementById('rut_mensaje');
    let rutSpan = document.getElementById('rut_span');
    let passwordSpan = document.getElementById('password_span');
    // Validación de campo vacío y formato de rut correcto
    $("#formulario").submit(function (event) {
        event.preventDefault();

        if (rutUsuario.value.trim() === '') {
            rutSpan.innerHTML = 'Este campo es obligatorio';
        } else if (rutUsuario.value.trim() !== '') {
            rutSpan.innerHTML = '';
            let Fn = {
                // Valida el rut con su cadena completa "XXXXXXXX-X"
                validaRut: function (rutCompleto) {
                    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
                        return false;
                    let tmp = rutCompleto.split('-');
                    let digv = tmp[1];
                    let rut = tmp[0];
                    if (digv == 'K') digv = 'k';
                    return (Fn.dv(rut) == digv);
                },
                dv: function (T) {
                    let M = 0, S = 1;
                    for (; T; T = Math.floor(T / 10))
                        S = (S + T % 10 * (9 - M++ % 6)) % 11;
                    return S ? S - 1 : 'k';
                }
            }
            // Llamado de función
            Fn.validaRut(rutUsuario.value)
                ?
                rutMensaje.innerHTML = '<span class="text-success"> Rut Válido </span>'
                :
                rutMensaje.innerHTML = '<span class="text-danger"> Rut Inválido </span>'
        }
        // Validación de campo contraseña
        if (password.value.trim() === '') {
            passwordSpan.innerHTML = 'Este campo es obligatorio';
        } else if (password.value.length > 20) {
            passwordSpan.innerHTML = 'Escribe una contraseña máximo 20 caracteres';
        } else {
            alert('Acceso correcto, sera direccionado al listado de usuarios')
            window.location = 'listado_usuarios.html' 
        }
    });
});
