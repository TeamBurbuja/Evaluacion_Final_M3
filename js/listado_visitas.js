$(document).ready(function () {
    $('#tabla-de-datos').tableExport();

    $('.tableexport-caption').prepend('<h5>Exportar Tabla</h5>');
    $('.xlsx').text('EXCEL ').append('<i class="fas fa-file-excel"></i>');
    $('.xlsx').addClass('btn btn-success text-white px-4 py-2 m-3');
    $('.csv').text('CSV ').append('<i class="fas fa-file-csv"></i>');
    $('.csv').addClass('btn btn-success text-white px-4 py-2 m-3');
    $('.txt').text('TXT ').append('<i class="fas fa-file-alt"></i>');
    $('.txt').addClass('btn btn-success text-white px-4 py-2 m-3');
    
});
