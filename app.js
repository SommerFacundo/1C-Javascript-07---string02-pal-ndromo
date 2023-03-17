let btn = document.getElementById("button");

function esPalindromo(fr){
    let aux = fr;
    aux = aux.toUpperCase();
    fr = fr.toUpperCase();
    aux = aux.split("");
    aux = aux.reverse();
    aux = aux.join("");
    if(aux == fr){
        return true;
    }else{
        return false;
    }
}

function crearP(rsp) {
    let p = document.createElement("p");
    let div = document.getElementById("resultText");
    if(rsp == 0){
        p.textContent = "SI";
        div.appendChild(p);
    }else{
        p.textContent = "NO";
        div.appendChild(p);
    }

  }


btn.addEventListener("click",()=>{
    event.preventDefault();
    let textarea = document.getElementById("textarea").value;
    textarea = textarea.split(/\r?\n/);
    for (palabra of textarea) {
        if(palabra.trim().toUpperCase() != "XXX"){
            console.log(palabra);
            if(esPalindromo(palabra.trim())){
                crearP(0);
            }else{
                crearP(1);
            };
        }
    }


});