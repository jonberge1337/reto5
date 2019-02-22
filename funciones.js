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
    var array = ["subInicio", "subConvenios", "subColegiacion", "subContratos", "subFormacion", "subBolsa", "subCookies", "subPrivacidad"];
    // if (boton.id == "Inicio") {
    // document.getElementById("subConvenios").style.display = "none";
    // document.getElementById("subColegiacion").style.display = "none";
    // document.getElementById("subContratos").style.display = "none";
    // document.getElementById("subFormacion").style.display = "none";
    // document.getElementById("subBolsa").style.display = "none";
    // document.getElementById("subCookies").style.display = "none";
    // document.getElementById("subPrivacidad").style.display = "none";
    // document.getElementById("subInicio").style.display = "inline";
    // }else if (boton.id == "Convenios") {
    //     document.getElementById("subInicio").style.display = "none";
    //     document.getElementById("subColegiacion").style.display = "none";
    //     document.getElementById("subContratos").style.display = "none";
    //     document.getElementById("subFormacion").style.display = "none";
    //     document.getElementById("subBolsa").style.display = "none";
    //     document.getElementById("subCookies").style.display = "none";
    //     document.getElementById("subPrivacidad").style.display = "none";
    //     document.getElementById("subConvenios").style.display = "inline";
    // }

    if (boton.id == "inicio") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subInicio").style.display = "inline";

    }else if (boton.id =="convenios") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subConvenios").style.display = "inline";

    }else if (boton.id == "colegiacion") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subColegiacion").style.display = "inline";

    }else if (boton.id == "contratos") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subContratos").style.display = "inline";

    }else if (boton.id == "formacion") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subFormacion").style.display = "inline";

    }else if (boton.id == "bolsa") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subBolsa").style.display = "inline";
        
    }else if (boton.id == "contacto") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subContacto").style.display = "inline";

    }else if (boton.id == "cookies") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subCookies").style.display = "inline";

    }else if (boton.id == "privacidad") {
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).style.display = "none";
        }
        document.getElementById("subPrivacidad").style.display = "inline";
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
}


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