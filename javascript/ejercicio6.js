startElements();


function startElements(){
    for(let i=0;i< 5 ; i++){

        let mydivh = document.createElement("div");
        mydivh.className="div-size-scc";
        mydivh.onmouseover=function(){
            this.style.visibility = "hidden";
            this.id = (i+1)+"";
        };
        mydivh.innerHTML= "Mouse over para borrar div #"+(i+1);
        let contenth = document.getElementById("cnt1");
        contenth.appendChild(mydivh);

        let mydiv = document.createElement("div");
        mydiv.className="div-size-drk";  
        let name = (i+1)+"d"; 
        this.id=  name;  
        mydiv.onclick=function(){
           document.getElementById(name.replace("d","")).style.visibility= "visible";
        };
        mydiv.innerHTML= "Click para mostrar el div #"+(i+1);
        let content = document.getElementById("cnt");
        content.appendChild(mydiv);

    }
}
 