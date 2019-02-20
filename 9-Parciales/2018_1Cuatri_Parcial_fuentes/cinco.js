function mostrar()
{
//Mercurio, Venus, la Tierra, Marte, Júpiter, Saturno, Urano, Neptuno y Plutón.
var planeta
planeta=prompt("su planeta?" , " ");
switch (planeta) {
case "tierra":
alert("aca vivimos.");
break;
case "mercurio":
case "venus":
case "marte":
alert("aca hace mas calor.");
break;
case "jupiter":
case "saturno":
case "urano":
case "neptuno":
alert("aca hace mas frio.")
break;
default:
alert("Aclaración: los planetas se ingresan en minúscula");
break;

}
}

