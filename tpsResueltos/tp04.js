// Constructores de nuevo auto y camion
function constructorAuto(peso, patente) {
    this.peso = peso;
    this.patente = patente;
}

function constructorCamion(peso) {
    this.peso = peso;
}

// Declaramos el limite de peso cantidad de autos a disponibles para cargar y nuestro listado de autos
var limite = Math.round(Math.random() * 10);
var listadoAutos = [];

// Generamos nuestros autos mediante el constructor.
for (var i = 0; i <= limite; i++) {
    var peso = Math.round(Math.random() * 1000);
    var patente = Math.round(Math.random() * 10000);
    var nuevoAuto = new constructorAuto(peso, patente);
    listadoAutos.push(nuevoAuto);
}

// Generamos nuestro camion desde nuestro constructor
var camionDeAutos = new constructorCamion(2000);

// Definimos nuesta funcion que va a cargar los autos en el camion mientras que el peso sea menor al limite indicado en el
// constructor del camion.

function subirAutos(listadoAutos, camionDeAutos) {

    var autosEnCamion = {
        pesoActual: 0,
        cantidadAutos: 0,
        patentes: []
    };

    for (elementos in listadoAutos) {
        var autoActual = listadoAutos[elementos];
        var pesoEstimado = autosEnCamion.pesoActual + autoActual.peso;

        if (pesoEstimado <= camionDeAutos.peso) {
            autosEnCamion.pesoActual += autoActual.peso;
            autosEnCamion.cantidadAutos++;
            autosEnCamion.patentes.push(autoActual.patente);
            //console.log(autosEnCamion);
        } else {
            return autosEnCamion;
        }
    }
    return autosEnCamion;
}

console.log(subirAutos(listadoAutos, camionDeAutos));