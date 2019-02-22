window.addEventListener('load', inicializarEventos, false);

function inicializarEventos(e) {
    var busqueda = document.getElementById("busqueda");
    busqueda.addEventListener("keypress", buscar, false);

    var inicio = document.getElementById("inicio");
    inicio.addEventListener("click", ocultar, false);

    var convenios = document.getElementById("convenios");
    convenios.addEventListener("click", ocultar, false);

    var colegiacion = document.getElementById("colegiacion");
    colegiacion.addEventListener("click", ocultar, false);

    var contratos = document.getElementById("contratos");
    contratos.addEventListener("click", ocultar, false);

    var formacion = document.getElementById("formacion");
    formacion.addEventListener("click", ocultar, false);

    var bolsa = document.getElementById("bolsa");
    bolsa.addEventListener("click", ocultar, false);

    var contacto = document.getElementById("contacto");
    contacto.addEventListener("click", ocultar, false);

    var contacto = document.getElementById("cookies");
    contacto.addEventListener("click", ocultar, false);

    var contacto = document.getElementById("privacidad");
    contacto.addEventListener("click", ocultar, false);

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

    if (boton.id == "inicio") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subInicio").style.display = "inline";

    } else if (boton.id == "convenios") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subConvenios").style.display = "inline";

    } else if (boton.id == "colegiacion") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subColegiacion").style.display = "inline";

    } else if (boton.id == "contratos") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subContratos").style.display = "inline";

    } else if (boton.id == "formacion") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subFormacion").style.display = "inline";

    } else if (boton.id == "bolsa") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subBolsa").style.display = "inline";

    } else if (boton.id == "contacto") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subContacto").style.display = "inline";

    } else if (boton.id == "cookies") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subCookies").style.display = "inline";

    } else if (boton.id == "privacidad") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
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
        document.write("<h1>PedidoEnviado:</h1> " + nombre);
    }

    // if(boton.id.localeCompare("Convenios")){
    //     for(var i = 0; i < array.length; i++){
    //         if (i != 1) {
    //             document.getElementById(array[i]).style.display = "none";
    //         }
    //     }
    // }

    // if(boton.id.localeCompare("Colegiacion")){
    //     for(var i = 0; i < array.length; i++){
    //         if (i != 2) {
    //             document.getElementById(array[i]).style.display = "none";
    //         }
    //     }
    // }

    // if(boton.id.localeCompare("Contratos")){
    //     for(var i = 0; i < array.length; i++){
    //         if (i != 3) {
    //             document.getElementById(array[i]).style.display = "none";
    //         }
    //     }
    // }

    // if(boton.id.localeCompare("Formacion")){
    //     for(var i = 0; i < array.length; i++){
    //         if (i != 4) {
    //             document.getElementById(array[i]).style.display = "none";
    //         }
    //     }
    // }

    // if(boton.id.localeCompare("Bolsa")){
    //     for(var i = 0; i < array.length; i++){
    //         if (i != 5) {
    //             document.getElementById(array[i]).style.display = "none";
    //         }
    //     }
    // }

    // if(boton.id.localeCompare("Contacto")){
    //     for(var i = 0; i < array.length; i++){
    //         if (i != 6) {
    //             document.getElementById(array[i]).style.display = "none";
    //         }
    //     }
    // }

    // if(boton.id.localeCompare("Cookies")){
    //     for(var i = 0; i < array.length; i++){
    //         if (i != 7) {
    //             document.getElementById(array[i]).style.display = "none";
    //         }
    //     }
    // }

    // if(boton.id.localeCompare("Privacidad")){
    //     for(var i = 0; i < array.length; i++){
    //         if (i != 8) {
    //             document.getElementById(array[i]).style.display = "none";
    //         }
    //     }
    // }
    // document.getElementById("subConvenios").style.display = "none";
    // document.getElementById("subColegiacion").style.display = "none";
    // document.getElementById("subContratos").style.display = "none";
    // document.getElementById("subFormacion").style.display = "none";
    // document.getElementById("subBolsa").style.display = "none";    

    // }// else if(boton.id == "Convenios"){

    // }else if(boton.id == "Colegiacion"){

    // }else if(boton.id == "Contratos"){

    // }else if(boton.id == "Formacion"){

    // }else if(boton.id == "Bolsa"){

    // }else if(boton.id == "Contacto"){

    // }


// window.addEventListener('load',inicializarEventos,false);

// function inicializarEventos(e)
// {
//   var boton1=document.getElementById('b1');
//   boton1.addEventListener('click',presionBoton,false);  
//   var boton2=document.getElementById('b2');
//   boton2.addEventListener('click',presionBoton,false);  
// }

// function presionBoton(e)
// {
//   var boton=e.target;
//   var ref=document.getElementById('titulo');
//   ref.firstChild.nodeValue='Name:'+boton.name+' Id:'+boton.id+' Value:'+boton.value;
// }

/* <button onclick="window.location.href='/page2'">Continue</button> */