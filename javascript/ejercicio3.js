
let tamaño = 0;
let tipo = 0;
let adicion = 0;

let info = document.getElementById("info");

let bt1 = document.getElementById("bt1");
let bt2 = document.getElementById("bt2");
let bt3 = document.getElementById("bt3");

let bt11 = document.getElementById("bt11");
let bt12 = document.getElementById("bt12");
let bt13 = document.getElementById("bt13");

let bt21 = document.getElementById("bt21");
let bt22 = document.getElementById("bt22");

let bt31 = document.getElementById("bt31");
let bt32 = document.getElementById("bt32");

let bt41 = document.getElementById("bt41");
let bt42 = document.getElementById("bt42");
let bt421 = document.getElementById("bt421");
let bt422 = document.getElementById("bt422");


let bt51 = document.getElementById("bt51");
let bt52 = document.getElementById("bt52");
let bt521 = document.getElementById("bt521");

let bt61 = document.getElementById("bt61");
let bt611 = document.getElementById("bt611");
let bt62 = document.getElementById("bt62");

let bt71 = document.getElementById("bt71");
let bt72 = document.getElementById("bt72");
let bt711 = document.getElementById("bt711");

let bt81 = document.getElementById("bt81");
let bt82 = document.getElementById("bt82");
let bt811 = document.getElementById("bt811");
let bt812 = document.getElementById("bt812");

let cancel0 = document.getElementById("cancel0");
let cancel1 = document.getElementById("cancel1");
let cancel2 = document.getElementById("cancel2");

let bt91 = document.getElementById("bt91");
let bt92 = document.getElementById("bt92");

let bt101 = document.getElementById("bt101");
let bt102 = document.getElementById("bt102");

bt1.onclick = function () {
    showorder();
    hideCtrl2();
    hideCrtl3();
    document.getElementById("div1").className = "show-element";
    document.getElementById("div13").className = "show-element";
    tamaño = 1;
};

bt2.onclick = function () {
    showorder();
    hideCtrl2();
    hideCrtl3();
    document.getElementById("div2").className = "show-element";
    document.getElementById("div13").className = "show-element";
    tamaño = 2;
};

bt3.onclick = function () {
    showorder();
    hideCtrl2();
    hideCrtl3();
    document.getElementById("div3").className = "show-element";
    document.getElementById("div13").className = "show-element";
    tamaño = 3;
};

cancel0.onclick = function () {
    showorder();
    hideCtrl2();
    erase();
}

function hideCtrl2() {
    document.getElementById("div1").className = "hide-element";
    document.getElementById("div2").className = "hide-element";
    document.getElementById("div3").className = "hide-element";
    document.getElementById("div13").className = "hide-element";
}

function hideCrtl3() {
    for (let i = 4; i < 10; i++) {
        document.getElementById("div" + i).className = "hide-element";
    }
    document.getElementById("div410").className = "hide-element";
    hidesubCtrl();
}

bt11.onclick = function () {
    showorder();
    hideCrtl3();
    document.getElementById("div4").className = "show-element";
    document.getElementById("div410").className = "show-element";
    tipo = 1;
}

bt12.onclick = function () {
    showorder();
    hideCrtl3();
    document.getElementById("div5").className = "show-element";
    document.getElementById("div410").className = "show-element";
    tipo = 2;
}

bt13.onclick = function () {
    showorder();
    hideCrtl3();
    document.getElementById("div6").className = "show-element";
    document.getElementById("div410").className = "show-element";
    tipo = 3;
}

bt21.onclick = function () {
    showorder();
    hideCrtl3();
    document.getElementById("div7").className = "show-element";
    document.getElementById("div410").className = "show-element";
    tipo = 4;
}


bt22.onclick = function () {
    showorder();
    hideCrtl3();
    document.getElementById("div8").className = "show-element";
    document.getElementById("div410").className = "show-element";
    tipo = 5;
}



bt31.onclick = function () {
    showorder();
    hideCrtl3();
    document.getElementById("div8").className = "show-element";
    document.getElementById("div410").className = "show-element";
    tipo = 6;
}

bt32.onclick = function () {
    showorder();
    hideCrtl3();
    document.getElementById("div9").className = "show-element";
    document.getElementById("div410").className = "show-element";
    tipo = 7;
};
// inicio de botone 
bt41.onclick = function () {
    showorder();
    adicion = 1;
}

bt421.onclick = function () {
    showorder();
    adicion = 2;
};

bt422.onclick = function () {
    showorder();
    adicion = 3;
};

bt51.onclick = function () {
    showorder();
    adicion = 5;
};

bt521.onclick = function () {
    showorder();
    adicion = 7;
};

bt611.onclick = function () {
    showorder();
    adicion = 9;
};

bt62.onclick = function () {
    showorder();
    adicion = 10;
};

bt71.onclick = function () {
    showorder();
    adicion = 11;
};

bt711.onclick = function () {
    showorder();
    adicion = 13;
};

bt81.onclick = function () {
    showorder();
    adicion = 14;
}

bt811.onclick = function () {
    showorder();
    adicion = 16;
}

bt812.onclick = function () {
    showorder();
    adicion = 17;
}

bt91.onclick = function () {
    showorder();
    adicion = 18;
}
bt92.onclick = function () {
    showorder();
    adicion = 19;
}
bt101.onclick = function () {
    showorder();
    adicion = 20;
}
bt102.onclick = function () {
    showorder();
    adicion = 21;
}

 
cancel1.onclick = function () {
    showorder();
    hideCtrl2();
    hideCrtl3();
    tipo = 0;
    adicion = 0;
}

bt42.onclick = function () {
    showorder();
    adicion = 4;
    document.getElementById("div41").className = "show-element";
}

bt52.onclick = function () {
    showorder();
    adicion = 6;
    document.getElementById("div51").className = "show-element";
}

bt61.onclick = function () {
    showorder();
    adicion = 8;
    document.getElementById("div61").className = "show-element";
}

bt72.onclick = function () {
    showorder();
    adicion = 12;
    document.getElementById("div71").className = "show-element";
}

bt82.onclick = function () {
    showorder();
    adicion = 15;
    document.getElementById("div81").className = "show-element";
};


cancel2.onclick = function () {
    showorder();
    hideCrtl3();    
    adicion = 0;
};

function hidesubCtrl() {
    document.getElementById("div41").className = "hide-element";
    document.getElementById("div51").className = "hide-element";
    document.getElementById("div61").className = "hide-element";
    document.getElementById("div71").className = "hide-element";
    document.getElementById("div81").className = "hide-element";
}


function showorder() {
    let message1 = " ";
    let message2 = " ";
    let message3 = " ";
    switch (tamaño) {
        case 1:
            message1 = "pizza personal";
            break;
        case 2:
            message1 = "pizza mediana";
            break;
        case 3:
            message1 = "pizza familiar";
            break;
        default:
            message1 = "";
            break;
    }

    switch (tipo) {
        case 1:
            message2 = "pollo y champiñones";
            break;
        case 2:
            message2 = "hawaiana";
            break;
        case 3:
            message2 = "carnes";
            break;
        case 4:
            message2 = "mexicana";
            break;
        case 5:
            message2 = "criolla";
            break;
        case 6:
            message2 = "vegetariana";
            break;
        case 7:
            message2 = "carne y pollo";
            break;
        default:
            message2 = "";
            break;
    }
    
    if(adicion == 1 || adicion ==10 ||adicion==17 || adicion==18){
        message3 = "con queso";
    }else if(adicion == 2){
        message3 = "con salsa";
    }else if(adicion == 3){
        message3 = "con borde de bocadillo";
    }else if(adicion == 4 || adicion ==19){
        message3 = "sin queso";
    }else if(adicion == 5){
        message3 = "sin piña";
    }else if(adicion == 6){
        message3 = "sin jamon";
    }else if(adicion == 7){
        message3 = "con salami";
    }else if(adicion == 8){
        message3 = "sin salami";
    }else if(adicion == 9){
        message3 = "con cabano";
    }else if(adicion == 11){
        message3 = "con nachos";
    }else if(adicion == 12){
        message3 = "sin nachos";
    }else if(adicion == 13){
        message3 = "extra guacamole";
    }else if(adicion == 14){
        message3 = "con maíz";
    }else if(adicion == 15){
        message3 = "sin maíz";
    }else if(adicion == 16){
        message3 = "extra carne molida";
    }else if(adicion == 20){
        message3 = "adicion de salchicha";
    }else if(adicion == 21){
        message3 = "adicion de champiñones";
    }else{
        message3 = " ";
    }
    
    showInfo(message1,message2,message3);
}

function showInfo(mess1, mess2, mess3){   
    info.innerHTML = "Su orden es: " + mess1 +" "+mess2 + " " +mess3;
}

function erase() {
    tamaño = 0;
    tipo = 0;
    adicion = 0;
}


