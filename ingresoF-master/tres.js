/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
let sexo;
let lugar;
let temporada;
let cantidadViajan;
let contadorBariloche = 0;
let contadorCataratas = 0;
let contadorSalta = 0;
let pasajerosMax = 0;
let seguir;
let contadorInvierno = 0;
let contadorPasajerosInvierno = 0;

do{

sexo = prompt("Ingrese  sexo del titular: 'M' o 'F'.").toLowerCase();
        while(sexo != 'm' && sexo != 'f' && !(isNaN(sexo))){
            sexo = prompt("Sexo no válido. Ingrese un sexo: 'M' o 'F'.").toLowerCase();
		}
lugar = prompt("Ingrese  lugar de destino: 'Bariloche', 'Cataratas' o 'Salta'.").toLowerCase();
        while(lugar !='Bariloche' && lugar !='Cataratas' && lugar !='Salta'&& !(isNaN(lugar))){
			lugar = prompt("Ingrese  lugar de destino: 'Bariloche', 'Cataratas' o 'Salta'.").toLowerCase();
		}
temporada = prompt("Ingrese  temporada: 'verano', 'otoño', 'invierno' o 'primavera'.").toLowerCase();
while(temporada !='verano' && temporada !='otoño' && temporada !='invierno' && temporada !='primavera'&& !(isNaN(temporada))){
	temporada = prompt("Ingrese  temporada: 'verano', 'otoño', 'invierno' o 'Salta'.").toLowerCase();
}






cantidadViajan =parseInt(prompt("ingrese la cantidad de viajeros: "));
while(cantidadViajan<=0){
	cantidadViajan =parseInt(prompt("Error. Ingrese la cantidad de viajeros: "));
}
if(cantidadViajan > pasajerosMax){
	pasajerosMax = cantidadViajan;
	sexoTitular = sexo;
	}

if(lugar == 'Bariloche'){
	contadorBariloche++;
}
else if(lugar == 'Cataratas'){
	contadorCataratas++;
}
else{
	contadorSalta++;
}


if (temporada == 'invierno' ){

	contadorInvierno ++;
	contadorPasajerosInvierno += cantidadViajan;


	
}


		seguir = prompt("quiere ingresar otra estadia? :");
	}while(seguir == "s");

if(contadorBariloche > contadorCataratas && contadorBariloche> contadorSalta){
console.log("El lugar mas elegido es Bariloche");
}
else if (contadorCataratas > contadorBariloche && contadorCataratas> contadorSalta){
	console.log("El lugar mas elegido es Cataratas");

}
else{
	console.log("El lugar mas elegido es Salta");
}
console.log("el sexo del titutal con mayor cantida de pasajeros es: "+ sexoTitular );



console.log("el promedio de personas por viaje,  que viajan en invierno es :"+ contadorPasajerosInvierno/contadorInvierno );

}
