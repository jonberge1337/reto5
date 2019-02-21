window.addEventListener('load', inicializarEventos, false);

function inicializarEventos(evento) {
    var nombre = document.getElementById("apellidosynombre");
    nombre.addEventListener("blur", verificarNombre, false);
    nombre.addEventListener("focus", reiniciarNombre, false);

    var dni = document.getElementById("dni");
    dni.addEventListener("blur", verificarDNI, false);
    dni.addEventListener("focus", reiniciarDNI, false);

    var email = document.getElementById("email");
    email.addEventListener("blur", verificarEmail, false);
    email.addEventListener("focus", reiniciarEmail, false);

    var direccion = document.getElementById("direccion");
    direccion.addEventListener("blur", verificarDireccion, false);
    direccion.addEventListener("focus", reiniciarDireccion, false);

    var poblacion = document.getElementById("poblacion");
    poblacion.addEventListener("blur", verificarPoblacion, false);
    poblacion.addEventListener("focus", reiniciarPoblacion, false);
    
    var cp = document.getElementById("cp");
    cp.addEventListener("blur", verificarCp, false);
    cp.addEventListener("focus", reiniciarCp, false);

    var card = document.getElementById("card");
    card.addEventListener("blur", verificarCard, false);
    card.addEventListener("focus", reiniciarCard, false);

    var boton = document.getElementById("enviar");
    boton.addEventListener("click", renovar, false);
    
}

function verificarNombre() {
    var valor = document.getElementById("apellidosynombre").value;
    var expreg = /^[a-zñ ]+$/i;
    if (!expreg.test(valor)) {
        document.getElementById("errorNombre").style.display = "block";
    }
}

function reiniciarNombre() {
    var x = document.getElementById("errorNombre");
    if (x.style.display == "block") {
        var valor = document.getElementById("apellidosynombre").value = "";
        x.style.display = "none";
    }
}

function verificarDNI() {
    var valor = document.getElementById("dni").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if (!(/^\d{8}[A-Z]$/.test(valor))) {
        document.getElementById("errorDni").style.display = "block";
    }

    if (valor.charAt(8) != letras[(valor.substring(0, 8)) % 23]) {
        document.getElementById("errorDni").style.display = "block";
    }
}

function reiniciarDNI() {
    var x = document.getElementById("errorDni");
    if (x.style.display == "block") {
        var valor = document.getElementById("dni").value = "";
        x.style.display = "none";
    }
}

function verificarEmail() {
    var valor = document.getElementById("email").value;
    var expreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!expreg.test(valor)) {
        document.getElementById("errorEmail").style.display = "block";
    }

}

function reiniciarEmail() {
    var x = document.getElementById("errorEmail");
    if (x.style.display == "block") {
        var valor = document.getElementById("email").value = "";
        x.style.display = "none";
    }
}

function verificarDireccion() {
    var valor = document.getElementById("direccion").value;
    var expreg = /^[a-zñ /º 0-9]+$/i;
    if(!expreg.test(valor)) {
        document.getElementById("errorDireccion").style.display = "block";
    }
}

function reiniciarDireccion() {
    var x = document.getElementById("errorDireccion");
    if (x.style.display == "block") {
        var valor = document.getElementById("direccion").value = "";
        x.style.display = "none";        
    }
}

function verificarPoblacion() {
    var valor = document.getElementById("poblacion").value;
    var expreg = /^[a-zñ ]+$/i;
    if(!expreg.test(valor)){
        document.getElementById("errorPoblacion").style.display = "block";
    }
}

function reiniciarPoblacion() {
    var x = document.getElementById("errorPoblacion");
    if (x.style.display == "block") {
        var valor = document.getElementById("poblacion").value = "";
        x.style.display = "none";          
    }    
}

function verificarCp() {
    var valor = document.getElementById("cp").value;
    var expreg = /^\d{5}$/;
    if(!expreg.test(valor)){
        document.getElementById("errorCp").style.display = "block";
    }
}

function reiniciarCp() {
    var x = document.getElementById("errorCp");
    if(x.style.display == "block"){
        var valor = document.getElementById("cp").value = "";
        x.style.display = "none";
    }
}

function verificarCard() {
    var valor = document.getElementById("card").value;
    var expreg = /^\d{4}[ -]{0,1}\d{4}[ -]{0,1}\d{4}[ -]{0,1}\d{4}$/;
    if (!expreg.test(valor)) {
        document.getElementById("errorCard").style.display = "block";
    }
}

function reiniciarCard() {
    var x = document.getElementById("errorCard");
    if (x.style.display == "block") {
        var valor = document.getElementById("card").value = "";
        x.style.display = "none";
    }
}

function renovar(e) {
    var x = document.getElementById("principal");
    var nombre = document.getElementById("apellidosynombre").value;
    x.style.visibility = "hidden"
    document.write("<h1>PedidoEnviado:</h1> "+ nombre);
}