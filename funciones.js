window.addEventListener('load', inicializarEventos, false);

function inicializarEventos(e) {
    var busqueda = document.getElementById("busqueda");
    busqueda.addEventListener("keypress", buscar, false);

    var inicio = document.getElementById("Inicio");
    inicio.addEventListener("click", ocultarInicio("subInicio"), false);

    var convenios = document.getElementById("Convenios");
    convenios.addEventListener("click", ocultarConvenios, false);
    
    var colegiacion = document.getElementById("Colegiacion");
    colegiacion.addEventListener("click", ocultarColegiacion, false);
    
    var contratos = document.getElementById("Contratos");
    contratos.addEventListener("click", ocultarContratos, false);

    var formacion = document.getElementById("Formacion");
    formacion.addEventListener("click", ocultarFormacion, false);

    var bolsa = document.getElementById("Bolsa");
    bolsa.addEventListener("click", ocultarBolsa, false);

    var contacto = document.getElementById("Contactanos");
    contacto.addEventListener("click", ocultarContacto, false);
}

function buscar(e) {
    var tecla = e.which;
    var valorBusqueda = document.getElementById("busqueda").value;
    if (tecla == 13) {
        // var myWindow = window.open("https://www.google.es/search?q="+valorBusqueda, "MsgWindow", "width=640,height=480");
        var myWindow = window.open("https://www.google.es/search?q=" + valorBusqueda);
    }
}

function ocultarInicio(e){
    var array = ["subConevios", "subColegiacion", "subContratos", "subFormacion", "subBolsa"];
    
}

function ocultarConvenios(e){
    var array = ["subConevios", "subColegiacion", "subContratos", "subFormacion", "subBolsa"];
    
}

function ocultarColegiacion(e) {
    
}

function ocultarContratos(e) {
    
}

function ocultarFormacion(e) {
    
}

function ocultarBolsa(e) {
    
}

function ocultarContacto(e) {
    
}