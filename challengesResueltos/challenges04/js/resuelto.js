// Generamos el cosntructor con las diferentes caracteristicas
function constructorAuto(marca, puertas, ruedas, color, cinturonSeguridad, aireAcond, levataVidriosElec, dist, tiempo) {
    this.marca = marca;
    this.puertas = puertas;
    this.ruedas = ruedas;
    this.color = color;
    this.detalles = {
        cinturonSeguridad: cinturonSeguridad,
        aireAcond: aireAcond,
        levataVidriosElec: levataVidriosElec
    };
    this.dist = dist;
    this.tiempo = tiempo;

    this.velocidad = function(dist, tiempo) {
        velocidadMaxima = dist / tiempo + " km/h";
        // console.log("velocidad maxima es: " + velocidadMaxima)
        return velocidadMaxima;
    }(this.dist, this.tiempo)


}

//Creamos los autos con sus diferentes caracteristicas
auto1 = new constructorAuto("fiat", 3, 4, "rojo", true, false, true, 200, 1);
auto2 = new constructorAuto("ford", 2, 6, "verde", true, true, true, 100, .5);
auto3 = new constructorAuto("Acura", 1, 3, "azul", false, false, false, 300, 1);
auto4 = new constructorAuto("Lexus", 4, 2, "rojo", true, false, true, 200, .10);


var arrayAutos = [auto1, auto2, auto3, auto4];
for (i in auto1) {

    console.log("el valor de " + i + " es " + auto1[i]);
}