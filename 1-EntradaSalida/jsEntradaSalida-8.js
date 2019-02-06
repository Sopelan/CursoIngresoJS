/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numerodividendo;
	var numerodivisor;
	var resultado;
	numerodividendo=numeroDividendo.value;
	numerodividendo=parseInt(numerodividendo);
	numerodivisor=numeroDivisor.value;
	numerodivisor=parseInt(numerodivisor);
	resultado=(numerodividendo%numerodivisor);
	alert("el resto es: "+ resultado);
}
