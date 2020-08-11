/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contMujeres;
	let pesoMax;
	let nombrePesoMax;
	let edadPromedio;

	for (let i = 0; i < 5; i ++) {
	
	
		nombre = prompt("Ingrese Nombre del paciente: ");
		
	
		
		peso = parseFloat(prompt("Ingrese peso (>0) :"));
	
		while (peso <= 0  || isNaN(peso)) {
			peso = parseFloat(prompt("error. Ingrese peso (>0) :"));
		}

		edad = parseFloat(prompt("Ingrese edad :"));

		while ( edad < 0 || isNaN(edad)) {
			edad = parseInt(prompt("Ingrese edad :"));
		}
		
		sexo = prompt("Ingrese un sexo: 'M' o 'F'.").toLowerCase();
        while(sexo != 'm' && sexo != 'f' && !(isNaN(sexo))){
            sexo = prompt("Sexo no válido. Ingrese un sexo: 'M' o 'F'.").toLowerCase();
		}

		if(sexo == "f"){
			contMujeres ++;}
		
		else if (sexo == "m" && peso > pesoMax ){
			pesoMax = peso;
			nombrePesoMax = nombre;
			
		}


		edadPromedio += edad;
	}

	console.log("la cantidad de mujeres es :" + contMujeres);
	console.log("el nombre del hombre con mayor peso es:" + nombrePesoMax);
	console.log("La edad promedio es: " + edadPromedio/5 );
}
