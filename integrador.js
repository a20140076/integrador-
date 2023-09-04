alert("Buen provecho");
alert("Bienvenidos al restaurant, Corralito");
var entrada=parseInt(prompt("Ingrese el precio de la entrada"));
var plato=parseInt(prompt("Ingrese el precio del plato principal"));
var postre=parseInt(prompt("Ingrese el precio del postre"));
var total=entrada+plato+postre
var igv=(total*0.18)+total
console.log("El precio de la entrada es:",entrada);
console.log("El precio del plato principal es:",plato);
console.log("El precio del postre es:",postre);
console.log("El costo total es:",total);
console.log("El costo total con IGV es:",igv);