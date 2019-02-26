function mostrar()
{

	var positivo=0;
	var negativo=1;
	var numero
	var respuesta=true;
    var contador=0;
while(respuesta==true)
	{
    contador=contador+1;
    numero=prompt("insertar numero "+ contador);
    numero=parseFloat(numero);
    while(isNaN(numero))
        {
        numero=prompt("insertar numero "+contador);
        numero=parseFloat(numero);
        }
    if (numero>=0) 
    	{
    	positivo=positivo+numero;
    	}
    else
    	{
    	negativo=negativo*numero;
    	}

    respuesta=confirm("queres pedir otro numero?");
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN