function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, elementoActual) {
            return valorAcumulado + elementoActual;    
        }
    );

    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista = [
    400,
    500,
    800000,
    60,
    800,
    700,
];

function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);

    function par(numero) {
        if (numero % 2 === 0){
            return true;
        } else {
            return false;
        }
    }
    let mediana;
    if (par(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
    
        const promedioElemento1y2 = calcularMediaAritmetica ([
            elemento1,
            elemento2,
        ]);
    
        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista];
    }
    return  mediana;
}
