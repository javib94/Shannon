function contarCaracteres() {
    var inputText = document.getElementById('inputText').value;
    var contador = {};

    // Contar las apariciones de cada carácter
    for (var i = 0; i < inputText.length; i++) {
        var caracter = inputText[i];
        contador[caracter] = (contador[caracter] || 0) + 1;
    }

    // Ordenar los resultados por orden de aparición
    var resultadosOrdenados = Object.entries(contador).sort(function(a, b) {
        return b[1] - a[1]; // Cambio en el orden, b[1] - a[1]
    });

  // Calcular la cantidad total de caracteres en el texto
var totalCaracteres = inputText.length;

// Crear una tabla para mostrar resultados
var resultadosDiv = document.getElementById('resultados');
resultadosDiv.innerHTML = '<h2>Resultados</h2>';

var table = document.createElement('table');
var headerRow = table.insertRow(0);
var headerCell1 = headerRow.insertCell(0);
var headerCell2 = headerRow.insertCell(1);
var headerCell3 = headerRow.insertCell(2);
headerCell1.textContent = 'Carácter';
headerCell2.textContent = 'Apariciones';
headerCell3.textContent = 'Probabilidad';
var totalCaracteres = inputText.length;

var probabilidades = Object.entries(contador).map(function (entry) {
    return entry[1] / totalCaracteres;
});

// Calcular la entropía de Shannon
var entropia = -probabilidades.reduce(function (sum, probabilidad) {
    return sum + probabilidad * Math.log2(probabilidad);
}, 0);

console.log("Entropía de Shannon:", entropia.toFixed(6)); // Redondear a 4 decimales y mostrar en la consola


// Llenar la tabla con los resultados ordenados y la probabilidad calculada
for (var i = 0; i < resultadosOrdenados.length; i++) {
    var row = table.insertRow(i + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var caracter = resultadosOrdenados[i][0];
    if (caracter==" "){
        caracter = "espacio"
    }
    var apariciones = resultadosOrdenados[i][1];
    var probabilidad = (apariciones / totalCaracteres).toFixed(6); // Redondear a 2 decimales
    cell1.textContent = caracter;
    cell2.textContent = apariciones;
    cell3.textContent = probabilidad;
}

// Agregar la tabla al contenedor de resultados
resultadosDiv.appendChild(table);
}