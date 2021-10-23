function calculaTotal() {
    var total = 0
    var descuento = 0
    const precioSinDto = 200 //precio estándar de las entradas
  
    //obtengo el valor de la cantidad
    var cantidad = document.getElementById('cantidad').value;

    //evito poner valores flotantes o negativos en cantidad de entradas
    if (cantidad < 1) {
        document.getElementById('cantidad').value = 1;
        cantidad = 1
    }
    //luego redondeo flotantes al entero más próximo
    else {
        cantidad = parseInt(document.getElementById('cantidad').value);
        document.getElementById('cantidad').value = cantidad;
    }

    //obtengo lo seleccionado
    var selec = document.getElementById('categoria');
    var categoria = selec.options[selec.selectedIndex].value;

    //descuentos por categoría
    switch (categoria) {
        case 'Estudiante':
            descuento = 0.8;
            break;

        case 'Trainee':
            descuento = 0.5;
            break;
        case 'Junior':
            descuento = 0.15;
            break;
    }

    total = (precioSinDto - precioSinDto * descuento) * cantidad;

    //modifico el valor en el elemento con el id indicado, o sea en el total
    document.getElementById('total').value = 'Total a pagar: $' + total;
}