/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//elNombre.value="sopelan";
	var nombre;
	var edad;

	nombre=elNombre.value;
	edad=laEdad.value;
	alert("Usted se llama" + nombre +" y tiene " + edad + " años");
}

