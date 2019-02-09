/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var ancho;
var largo;
var perimetro;
var alambre;

ancho=Ancho.value;
largo=Largo.value;
ancho=parseInt(ancho);
largo=parseInt(largo);
perimetro=(ancho + largo)*2;
alambre=perimetro*3;

alert("el perimetro es de " + perimetro);
alert("tiene "+ alambre + " alambres");


}
function Circulo () 
{
	var radio;
	var pi;
	var perimetro;
	var alambre;
	pi=3.14159265359;
	radio=Radio.value;
    radio=parseInt(radio);
    perimetro=(pi*2)*radio;
    alambre=perimetro*3;
 alert("el perimertro es de " + perimetro);
 alert("tiene "+ alambre+ "alambres");


}
function Materiales () 
{
var ancho;
var largo;
var contrapiso;
var bolsa;
var cal;

ancho=Ancho.value;
largo=Largo.value;
ancho=parseInt(ancho);
largo=parseInt(largo);
contrapiso=(ancho*largo);
bolsa=contrapiso*2;
cal=contrapiso*3;
alert("se necesita " + bolsa + " bolsas");
alert("se necesita " + cal + " cal");
}