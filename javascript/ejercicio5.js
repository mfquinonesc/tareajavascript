let button = document.getElementById("btnc");
 


button.onclick = function(){   
    
    let mydiv =  document.createElement("div");
    mydiv.className="div-size-drk";
    mydiv.onclick=function(){
        if(this.className == "div-size-drk"){
            this.className = "div-size-scc";
        }else{
            this.className = "div-size-drk";
        }        
    };
    mydiv.innerHTML= "Click para cambiar color";
    let content = document.getElementById("cnt");
    content.appendChild(mydiv);

};
