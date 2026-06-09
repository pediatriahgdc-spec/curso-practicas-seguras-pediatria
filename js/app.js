function verificarIdentificacion() {

let respuesta =
document.querySelector(
'input[name="pregunta1"]:checked'
);

if(!respuesta){
alert("Seleccione una respuesta");
return;
}

if(respuesta.value=="correcta"){

document.getElementById("resultado")
.innerHTML =
"✅ Correcto. El número de cama NO es un identificador válido.";

}
else{

document.getElementById("resultado")
.innerHTML =
"❌ Incorrecto. Revise la práctica segura de identificación del paciente.";

}

}
