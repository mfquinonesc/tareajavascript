
const entre = [];
const fin = [];


let btgd = document.getElementById("btgd");
let selector = document.getElementById("select");
let texta = document.getElementById("texta");
let btmt = document.getElementById("btmt");


btmt.onclick = function(){
    let l =  entre.length;  
    let content = document.getElementById("ul1");
    content.innerHTML="";
    for (let i =0; i<l; i++){
        let li =  document.createElement("li");
        li.innerText=entre[i];
        content.appendChild(li);
    } 

    l = fin.length;  
    content = document.getElementById("ul2");
    content.innerHTML="";
    for (let i =0; i<l; i++){
        let li =  document.createElement("li");
        li.innerText=fin[i];
        content.appendChild(li);
    } 
};


btgd.onclick = function () {
    let day = selector.selectedIndex + 0;
    switch (day) {
        case 1:
            entre.push(texta.value);
            break;
        case 2:
            entre.push(texta.value);
            break;
        case 3:
            entre.push(texta.value);
            break;
        case 4:
            entre.push(texta.value);
            break;
        case 5:
            entre.push(texta.value);
            break;
        case 6:
            fin.push(texta.value);
            break;
        case 7:
            fin.push(texta.value);
            break;
        default:
            break;
    }
    texta.value = "";
};