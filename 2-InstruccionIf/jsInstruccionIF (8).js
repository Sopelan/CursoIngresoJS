function mostrar()
{
//tomo la edad  
 
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


}//FIN DE LA FUNCIÓN