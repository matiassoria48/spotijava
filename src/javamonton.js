function shakeMe() {
    alert("A esto le llamamos Alert y no sive para mucho utilizandolo de esta manera");
}

function ConfirmDemo() {
//Ingresamos un mensaje a mostrar
    let mensaje = confirm("¿Te gusta Mi Pagina?");
//Detectamos si el usuario acepto el mensaje
    if (mensaje) {
        alert("¡Thaanksss!");
    }
//Detectamos si el usuario denegó el mensaje
    else {
        alert("Tampoco es que me importe mucho ;)");
    }
}
let createVideoCard = function () {
    let img = document.createElement("img");
    img.className = "card-img-top";
    img.src = "src\\spotijava\\img\\17_Zaz_Neta-600x600.jpg";
}
