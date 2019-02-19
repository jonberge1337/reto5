window.addEventListener('load', inicializarEventos, false);

function inicializarEventos(e) {
    var busqueda = document.getElementById("busqueda");
    busqueda.addEventListener("keypress", buscar, false);

    var inicio = document.getElementById("Inicio");
    inicio.addEventListener("click", ocultar, false);

    var convenios = document.getElementById("Convenios");
    convenios.addEventListener("click", ocultar, false);
    
    var colegiacion = document.getElementById("Colegiacion");
    colegiacion.addEventListener("click", ocultar, false);
    
    var contratos = document.getElementById("Contratos");
    contratos.addEventListener("click", ocultar, false);

    var formacion = document.getElementById("Formacion");
    formacion.addEventListener("click", ocultar, false);

    var bolsa = document.getElementById("Bolsa");
    bolsa.addEventListener("click", ocultar, false);

    var contacto = document.getElementById("Contacto");
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

function ocultar(e){
    // e.target es otra propiedad del evento, para saber el botón que se ha pulsado
    var boton = e.target;
    var array = ["subInicio", "subConvenios", "subColegiacion", "subContratos", "subFormacion", "subBolsa"];
    if(boton.id.localeCompare("inicio")){
        for(var i = 0; i < array.length; i++){
            document.getElementById(array[i]).style.display = "none"; 
        }
    }
    
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