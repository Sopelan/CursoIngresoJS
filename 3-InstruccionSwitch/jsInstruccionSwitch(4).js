function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
//Meses de 30 días: Abril, junio, septiembre y noviembre. 
//Meses de 31 días: Enero, marzo, mayo, julio, agosto, octubre y diciembre.

//alert (mesDelAño);
switch(mesDelAño){
case "Enero":
case "Marzo":
case "Mayo":
case "Julio":
case "Agosto":
alert("si tiene 31 dias");
break;
case "Abril":
case "Junio":
case "Septiembre":
case "Nobiembre":
alert("si tiene 30 dias");
break;
case "Febrero":
alert("si tiene 28 dias");	
}

	



}//FIN DE LA FUNCIÓN