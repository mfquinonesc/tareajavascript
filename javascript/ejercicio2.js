// 2-Digitar alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página. (Con Switch)

let palabra = prompt("Digite alguna de estas palabras (casa, mesa, perro, gato)");
let respuesta = "";

switch (palabra) {
    case "casa":
        respuesta = "house";
        break;
    case "mesa":
        respuesta = "table";
        break;
    case "perro":
        respuesta = "dog";
        break;
    case "cat":
        respuesta = "gato";
        break;

    default:
        respuesta = "Usted no escribio bien!";
        break;
}


alert(respuesta);