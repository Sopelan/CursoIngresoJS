function mostrar()
{

	var positivo=0;
	var negativo=1;
	var numero
	var respuesta='si';

while(respuesta=="si")
	{
    numero=prompt("insertar numero");
    numero=parseFloat(numero);
    if (numero>=0) 
    	{
    	positivo=positivo+numero;
    	}
    else
    	{
    	negativo=negativo*numero;
    	}

    respuesta=prompt("queres pedir otro numero?");
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN