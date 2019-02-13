function mostrar()
{
//tomo la edad  
<<<<<<< HEAD
 
var edad1
var estadocivill
edad1=edad.value
edad1=parseInt(edad1)
estadocivill=estadoCivil.value
if (edad1<18 && estadocivill=="Divorciado")
{alert("NO HACER NADA");
}
if (edad1<18 && estadocivill=="Casado")
{alert("NO HACER NADA");
}
if (edad1>18 && estadocivill== "Soltero") 
{alert("Es soltero y no es menor")

}

=======
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
>>>>>>> 1c1a85c182a08f0a29e1bc0580ef51d182f390b2

}//FIN DE LA FUNCIÓN