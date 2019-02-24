window.addEventListener('load', inicializarEventos, false);
window.addEventListener('load', inicializarModal, false);

function inicializarEventos(e) {
    var busqueda = document.getElementById("busqueda");
    busqueda.addEventListener("keypress", buscar, false);

    var inicio = document.getElementById("inicio");
    inicio.addEventListener("click", ocultar, false);

    var convenios = document.getElementById("convenios");
    convenios.addEventListener("click", ocultar, false);

    var convenios = document.getElementById("IDconQuien");
    convenios.addEventListener("click", ocultar, false);

    var convenios = document.getElementById("IDdesdeCuando");
    convenios.addEventListener("click", ocultar, false);

    var convenios = document.getElementById("IDenlaces");
    convenios.addEventListener("click", ocultar, false);

    var colegiacion = document.getElementById("colegiacion");
    colegiacion.addEventListener("click", ocultar, false);

    var colegiacion = document.getElementById("IDrazones");
    colegiacion.addEventListener("click", ocultar, false);

    var colegiacion = document.getElementById("IDrequisitos");
    colegiacion.addEventListener("click", ocultar, false);

    var inscripcion = document.getElementById("IDinscripcion");
    inscripcion.addEventListener("click", ocultar, false);

    var contratos = document.getElementById("contratos");
    contratos.addEventListener("click", ocultar, false);
    
    var contratos = document.getElementById("IDtemporal");
    contratos.addEventListener("click", ocultar, false);
    
    var contratos = document.getElementById("IDindefinido");
    contratos.addEventListener("click", ocultar, false);

    var contratos = document.getElementById("IDpracticas");
    contratos.addEventListener("click", ocultar, false);

    var formacion = document.getElementById("formacion");
    formacion.addEventListener("click", ocultar, false);

    var formacion = document.getElementById("IDcursos");
    formacion.addEventListener("click", ocultar, false);

    var formacion = document.getElementById("IDseminarios");
    formacion.addEventListener("click", ocultar, false);

    var bolsa = document.getElementById("bolsa");
    bolsa.addEventListener("click", ocultar, false);

    var contacto = document.getElementById("contacto");
    contacto.addEventListener("click", ocultar, false);

    var inscripcionDos = document.getElementById("IDinscripcion2");
    inscripcionDos.addEventListener("click", ocultar, false);

    var cookies = document.getElementById("cookies");
    cookies.addEventListener("click", ocultar, false);

    var privacidad = document.getElementById("privacidad");
    privacidad.addEventListener("click", ocultar, false);

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

}

function inicializarModal(e) {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.addEventListener("click", ocultarModal, false);
}

function ocultarModal(e) {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function buscar(e) {
    // e.which es una propiedad del evento, para saber qué tecla se pulsa
    var tecla = e.which;
    var valorBusqueda = document.getElementById("busqueda").value;
    if (tecla == 13) {
        // var myWindow = window.open("https://www.google.es/search?q="+valorBusqueda, "MsgWindow", "width=640,height=480");
        var myWindow = window.open("https://www.google.es/search?q=" + valorBusqueda);
    }
}

function ocultar(e) {
    // e.target es otra propiedad del evento, para saber el botón que se ha pulsado
    var boton = e.target;
    var array = ["subInicio", "subConvenios", "subColegiacion", "subContratos", "subFormacion", "subBolsa", "subCookies", "subPrivacidad", "subContacto"];
    // Oculta todo el html, pero cuando damos al boton (Usando el IF) que nos interesa nos muestra dicha parte del HTML
    for (var i = 0; i < array.length; i++) {
        document.getElementById(array[i]).style.display = "none";
    }

    if (boton.id == "inicio") {
        document.getElementById("subInicio").style.display = "inline";

    } else if (boton.id == "convenios" || boton.id == "IDconQuien" || boton.id == "IDdesdeCuando" || boton.id == "IDenlaces") {
        document.getElementById("subConvenios").style.display = "inline";

    } else if (boton.id == "colegiacion" || boton.id == "IDrequisitos" || boton.id == "IDrazones" || boton.id == "IDinscripcion") {
        document.getElementById("subColegiacion").style.display = "inline";

    } else if (boton.id == "contratos" || boton.id == "IDtemporal" || boton.id == "IDindefinido" || boton.id == "IDpracticas") {
        document.getElementById("subContratos").style.display = "inline";

    } else if (boton.id == "formacion" || boton.id == "IDcursos" || boton.id == "IDseminarios") {
        document.getElementById("subFormacion").style.display = "inline";

    } else if (boton.id == "bolsa") {
        document.getElementById("subBolsa").style.display = "inline";

    } else if (boton.id == "contacto" || boton.id == "IDinscripcion2") {
        document.getElementById("subContacto").style.display = "inline";

    } else if (boton.id == "cookies") {
        document.getElementById("subCookies").style.display = "inline";

    } else if (boton.id == "privacidad") {
        document.getElementById("subPrivacidad").style.display = "inline";
    }
}

// Formulario para Inscripción y "Contáctanos"
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
    if (!expreg.test(valor)) {
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
    if (!expreg.test(valor)) {
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
    if (!expreg.test(valor)) {
        document.getElementById("errorCp").style.display = "block";
    }
}

function reiniciarCp() {
    var x = document.getElementById("errorCp");
    if (x.style.display == "block") {
        var valor = document.getElementById("cp").value = "";
        x.style.display = "none";
    }
}