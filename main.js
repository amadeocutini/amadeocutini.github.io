const typed = new Typed('.typed', {
    strings: ["Hola,", "Bienvenido,"],
    
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar
    typeSpeed: 60, // velocidad en milisegundos para poner una letra
    startDelay: 0, // Tiempo de retraso en iniciar la animación. Aplica tambien cuando termina
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra
    smartBackspace: true, // ELiminar solamente las palabras que sean nuevas en una cadena de texto
    // shuffle: false, Alterar el orden en el que escribe las palabras 
    backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: false, // Repetir el array de strings
    // loopCount: false, Cantidad de veces a repetir el array. false = infinite
    showCursor: false, // Mostrar cursor palpitando
    // cursorChar: '', Caracter para el cursor en caso de que lo quiera activo
    contentType: 'html', // html' o 'null' para texto sin formato
}); 