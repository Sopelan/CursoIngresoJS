
function mostrar()
{
 var ancho;
 var alto;
 ancho=prompt("su ancho?" ,"");
 ancho=parseFloat(ancho);
 alto=prompt("su largo?" , "");
 alto=parseFloat(alto);
 var perimetro;
 perimetro=(ancho+alto)*2;
 alert("su perimetro es de " + perimetro);
}
