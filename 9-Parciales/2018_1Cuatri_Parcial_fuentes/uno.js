
function mostrar()
{
 var ancho;
  var largo;
  var rectangulo;
  ancho=prompt("de cuanto es tu ancho", "");
  ancho=parseInt(ancho);
  largo=prompt("de cuanto es tu alto", "");
  largo=parseInt(largo);
  rectangulo=(ancho*2+largo*2);
  alert("el perimetro es de " + rectangulo);

}
