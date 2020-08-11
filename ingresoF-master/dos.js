/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let Peso;
  let tipo;
  let pesoTotal = 0;
  let marcaCara;
  let precioCaro = 0;
  let marcaBarata;
  let precioBarato = 0;
  let seguir;

  do{

    marca = prompt("Igrese marca del producto:");


    precio = parseFloat(prompt("Ingrese precio  :"));
  
  while (precio <= 0  || isNaN(precio)) {
    precio = parseFloat(prompt("error. Ingrese precio :"));
  }
   
    peso = parseFloat(prompt("Ingrese peso (>0) :"));
	
  while (peso <= 0  || isNaN(peso)) {
    peso = parseFloat(prompt("error. Ingrese peso (>0) :"));
  }

  tipo = prompt("Ingrese tipo del producto: 'liquido' o 'solido'.").toLowerCase();
  while(tipo != 'liquido' && tipo != 'solido' && !(isNaN(tipo))){
    tipo = prompt("Ingrese tipo del producto: 'liquido' o 'solido'.").toLowerCase();
  }

  

  if (tipo == 'liquido' && precio > precioCaro ){
    precioCaro = precio;
    marcaCara = marca;
  }
  else if (tipo =='liquido' && precio < precioBarato ){
    precioBarato = precio;
    marcaBarata = marca;
  }
  else{
    continue;
  }
  
  pesoTotal = pesoTotal + peso;
  
  seguir = prompt("quiere ingresar otro  producto? :");
  }while(seguir == "s");
}

console.log("El peso total de la compra  es : " + pesoTotal);
console.log("La marca del liquido mas caro es: " + MarcaCara);
console.log("La marca del liquido mas barato es: " + MarcaBarata);

