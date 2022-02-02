
let btn = document.getElementById("btn");
let content = document.getElementById("seld");
let gend = document.getElementById("selg");
let message = document.getElementById("mesg");


llenarEdad();


btn.onclick = function () {
    let edad = content.selectedIndex + 0;
    let genero = gend.selectedIndex + 0;
    message.innerText = "";

    if (genero == 0) {
        message.innerText = "Debe seleccionar un genero!";
    } else {
        if (edad >= 18) {
            if (genero == 2 && edad >= 25) {
                message.innerText = "Usted debe pagar $25000!";
            }
            if (genero == 2 && edad < 25) {
                message.innerText = "Usted debe pagar $20000!";
            }
            if (genero == 1 && edad >= 24) {
                message.innerText = "Usted debe pagar $30000!";
            }
            if (genero == 1 && edad < 24) {
                message.innerText = "Usted debe pagar $25000!";
            }
        } else if (edad == 0) {
            message.innerText = "Debe seleccionar una edad válida!";
        }
        else {
            message.innerText = "Usted es menor de edad!\nNo puede ingresar!";
        }
    }
};


function llenarEdad() {
    let l = 150;
    for (let i = 1; i < l; i++) {
        let selector = document.createElement("option");
        selector.value = i + 0;
        selector.innerText = i + 0;
        content.appendChild(selector);
    }
}



