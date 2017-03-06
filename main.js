window.onload = function () {

var formulario = document.formulario;
var elementos = formulario.elements;



var validaSelect = function(e) {

var valor = document.getElementById("dropdown").value;
if (valor == "") {
	 alert("Por favor seleccione algo");
	 e.preventDefault();
}
	else {alert("El formulario se envió");	}
}






var validar = function(e) {

	validaSelect(e);
	
}

//Agregamos el evento al submit al formulario 
formulario.addEventListener("submit",validar)

}