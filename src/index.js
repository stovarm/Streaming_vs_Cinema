function calculateStreaming() {

    //Opción 1 -> lo aprendí analizando otros códigos.
    /* const checks = document.getElementsByClassName('check');        //Toma todos los checkbox
    const arrayChecks = Array.from(checks);                         //Transforme el HTML Collection (checks) a un Array
    const elementsChecked = arrayChecks.filter((element) => element.checked); //Filtro los valores dentro del array que están checked
    const totalStreaming = elementsChecked.reduce((sum, item) => sum += Number(item.value), 0)  //Sumos los valores dentro del array.
    return totalStreaming; */

    //Opcion 2  -> mi idea principal  
    const checks = document.getElementsByClassName('check');   //Toma todos los checkbox con la class=check
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
    const resultCinema = movies * 4; //4 dolares cada ticket
    const resultStreaming = calculateStreaming();
    const resultCompare = resultCinema - resultStreaming;
    
    const resultPlatform = document.getElementById("ResultPlatform");  //Enlazar la const con el elemento p donde voy a dar el resultado
    resultPlatform.innerText = " $" + resultStreaming; //Escribir en HTML desde JS
    const resultMovies = document.getElementById("ResultCinema");
    resultMovies.innerText = " $" + resultCinema;

    if(resultCompare > 0){  //Si el resultado es Positivo quiere decir que El total que se paga por ir a Cine es Mayor al de pagar las plataformas seleccionadas.
        const Compare = document.getElementById("ResultCompare")
        Compare.innerText = "It's better to pay the Platforms";
    } else {        
        const Compare = document.getElementById("ResultCompare")
        Compare.innerText = "It's better to go to the Cinema";        
    };
};
