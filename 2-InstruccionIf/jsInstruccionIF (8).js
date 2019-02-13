function mostrar()
{
//tomo la edad  
var edad1;
var estado;
edad1=edad.value;
edad1=parseFloat(edad1);
estado=estadoCivil.value;
if (edad1>=18 && estado=="Soltero") 
{alert("es soltero y no es menor");	
}
if (edad1<18 && estado=="Divorciado")
{alert("NO HACER NADA");	
}	
if (edad1<18 && estado=="Casado")
{alert("NO HACER NADA");	
}

}//FIN DE LA FUNCIÓN