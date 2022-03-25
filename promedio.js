const lista = [
    100,
    200,
    400,
    500,
    700,
];

function calcularMediaAritmetica (lista) {
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, elementoActual) {
            return valorAcumulado + elementoActual;    
        }
    );

    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}