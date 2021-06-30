//Animacion Ir Arriba
function scrollToTop(scrollDuration){
    var scrollStep = -window.scrollY / (scrollDuration / 15);
    var scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) window.scrollBy( 0, scrollStep );
        else clearInterval(scrollInterval); 
    },15);
}

document.addEventListener("DOMContentLoaded", function(e){
    //Boton Ir Arriba
    document.querySelector("#irArriba").addEventListener("click", function(e){
        scrollToTop(500);
        e.preventDefault();
    });
    
	//Menu de Navegacion con Animacion Desplegable
    document.querySelector("#switchnav").addEventListener("click", function(){
        var destino = document.querySelector(this.getAttribute("data-destino"));
        var estado = destino.getAttribute("data-estado");
        if( estado == "visible" ){
            destino.setAttribute("data-estado", "oculto");
            this.setAttribute("data-estado", "cerrado");
        }else{
            destino.setAttribute("data-estado", "visible");
            this.setAttribute("data-estado", "abierto");
        }
    });
	
    //Boton Mostrar busqueda
    document.querySelector("#btn-buscar").addEventListener("click", function(){
        var destino = document.querySelector(this.getAttribute("data-destino"));
        var estado = destino.getAttribute("data-estado");
        if( estado == "visible" ){
            destino.setAttribute("data-estado", "oculto");
            this.setAttribute("data-estado", "cerrado");
        }else{
            destino.setAttribute("data-estado", "visible");
            this.setAttribute("data-estado", "abierto");
        }
    });
}, false);