function cambio() {
    var body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("day-mode")) {
        body.classList.remove("day-mode");
        body.classList.add("night-mode");
        body.classList.contains("dia").style.zIndex = 1;
       
    } else {
        body.classList.remove("night-mode");
        body.classList.add("day-mode");
        body.classList.contains("noche").style.zIndex = 1;
     
    }
}
var modo = leermodoactual();
if(modo=="dia"){
    ponerModoDia();
}else{
    ponerModoNoche();
}
function leermodoactual(){
    window.localStorage.setItem("modo","noche");
   
    let modo = window.localStorage.getItem("modo");
    if(modo==='NULL'){
        alert("Hay MODO guardado" + modo);
    }else{ 
        alert("No hay MODO guardado");
    }
}

function ponerModoDia(){
    let todo = document.getElementById("todo");
    todo.style.color="black";
    todo.style.backgroundColor="white";
    window.localStorage.setItem("modoGuardado","dia");
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="none";
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="block";

}
function ponerModoNoche(){
    let todo = document.getElementById("todo");
    todo.style.color="white";
    todo.style.backgroundColor="black";
    window.localStorage.setItem("modoGuardado","noche");
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="block";
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="none";

}