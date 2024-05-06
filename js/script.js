//Inicializar el contador de intentos
let intentos =0;

//inicializar la funcion
function checkGuess(){
    if(intentos >=3){
        Swal.fire({
            icon: 'info',
            title: '¡Fin de intentos!',
            text: 'Has agotado tus 3 intentos. El número era:' +numeroAleatorio + '.'
        });
        //Reiniciar el # de intentos
        intentos =0;
        return;
    }
        //incrementar el número de intentos
        intentos++;
        //Generar un número aleatorio
        const numeroAleatorio = Math.floor(Math.random()*10) + 1;
        console.log(numeroAleatorio);
        //Obtener el valor ingresado por el usuario
        const numeroAdivinar = parseInt(document.getElementById("guess").value);
        //Comprobar si el número adivinado es igual al número aleatorio
        if(numeroAdivinar === numeroAleatorio){
            Swal.fire ({
                icon: 'success',
                title: 'Felicitaciones!',
                text: `Adivinaste el número en ${intentos} intentos.`

            });
            //Reiniciar el contador de intentos
            intentos = 0;
        } else {
            let mensaje = "No adivinaste el número.";
            if (numeroAdivinar>numeroAleatorio){
                mensaje += "El número que ingresaste es mayor del que se tiene que adivinar" 
            } else {
                mensaje += "El número que ingresaste es menor del que se tiene que adivinar"
            }
            Swal.fire({
                icon: 'error',
                title: '¡Oops!',
                text: `${mensaje} llevas ${intentos} de 3 intentos posibles.`
            });

    }
}

