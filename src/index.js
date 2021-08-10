const ticketPrice = 4;     //Valor de un boleto de cine en dolares 
function calculateCinema (movies, cost) {
    const resultCinema = movies * cost;
    return resultCinema;
};

function calculateStreaming() {
    const checks = document.getElementsByClassName('check');   //Toma todos los checkbox
    let totalStreaming = 0;
    for ( i = 0; i < 4; i++) {    //Iterar en las posiciones del array que tenemos de los checkbox
        if (checks[i].checked === true) {   //Validar si la posición [i] dentro del array está chuleada (el check activo)
            totalStreaming += Number(checks[i].value);  // Si tiene el chack sume el valor que corresponde a este checkbox (value establecido en el HTML)
        }
    };
    return totalStreaming; //Me entrega la sumatoria de todos los valores de las casillas que selecciono el usuario referente a las plataformas.
}

function compareStreaming() {     //Esta funcion es la que activa el Botón
    let inputMovies = document.getElementById("QuantityMovies");        // Tomar el valor que ingresa el usuario de cuantas peliculas en el input
    let movies = inputMovies.value;    //tomar el valor del input
    const resultCinema = calculateCinema (movies, ticketPrice); 
    const resultStreaming = calculateStreaming();
    const resultCompare = resultCinema - resultStreaming;

    if(resultCompare > 0){  //Si el resultado es Positivo quiere decir que El total que se paga por ir a Cine es Mayor al de pagar las plataformas seleccionadas.
        const resultPlatform = document.getElementById("ResultPlatform");  //Enlazar la const con el elemento p donde voy a dar el resultado
        resultPlatform.innerText = " $" + resultStreaming; //Escribir en HTML desde JS

        const resultMovies = document.getElementById("ResultCinema");
        resultMovies.innerText = " $" + resultCinema;

        const Compare = document.getElementById("ResultCompare")
        Compare.innerText = "It's better pay the Platforms";
    } else {
        const resultPlatform = document.getElementById("ResultPlatform");
        resultPlatform.innerText = " $" + resultStreaming;

        const resultMovies = document.getElementById("ResultCinema");
        resultMovies.innerText = " $" + resultCinema;
        
        const Compare = document.getElementById("ResultCompare")
        Compare.innerText = "It's better go to the Cinema";        
    };
};
