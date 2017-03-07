window.onload = function () {

var formulario = document.formulario;
var elementos = formulario.elements;



var validaSelect = function(e) {

var valor = document.getElementById("dropdown").value;
if (valor == "") {
	 alert("Por favor seleccione un auto ");
	 e.preventDefault();
}
	else {alert("El formulario se envió");	}
}






var validar = function(e) {

	validaSelect(e);
	
}

//Agregamos el evento submit al formulario 
formulario.addEventListener("submit",validar)

}