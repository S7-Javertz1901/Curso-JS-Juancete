const shrek = {

misiones: [],
PuntosDeMision: [],

asignarMision: function(mision) {
    this.misiones.push(mision);
    this.PuntosDeMision.push(mision.puntosAObtener())
},

misionesDificiles: function() {
return this.misiones.filter(mision => mision.esDificil()).map(mision => mision.nombreDeLaMision)    
},

quienesSolicitan: function() {
    return this.misiones.map(mision => mision.solicitante)
},

cantidadDePuntos: function(){
    return this.PuntosDeMision.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
}

}

class mision {

    constructor(nombreDeQuienSolicitaLaMision, nombreMision){
        this.solicitante = nombreDeQuienSolicitaLaMision
        this.nombreDeLaMision = nombreMision    
    }
    
    esDificil(){
        return false
    } 

    puntosAObtener(){
        return 0
    }

    puntosTotales(){
        return 0
    }
    
}

class liberarUnaPrincesa extends mision {
    
    constructor(nombreDeQuienSolicitaLaMision, nombreMision, cantidadDeTrolls){
        super(nombreDeQuienSolicitaLaMision, nombreMision)
        this.numeroDeTrolls = cantidadDeTrolls 
    }

    esDificil(){
        return this.solicitante.charAt(0) === 'G' || this.numeroDeTrolls > 3
    }

    puntosAObtener(){
        return 2 * this.numeroDeTrolls
    }  

    cambiarCantidadDeTrolls(nuevaCantidadDeTrolls){
        this.numeroDeTrolls = nuevaCantidadDeTrolls
    }

} 


class buscarObjetoMagico extends mision{

    constructor(nombreDeQuienSolicitaLaMision, nombreMision, distanciaACaminar){
        super(nombreDeQuienSolicitaLaMision, nombreMision)
        this.distanciaMision = distanciaACaminar 
    }

   esDificil(){
    return this.solicitante.charAt(0) === 'G' || this.distanciaMision > 100
   }

   puntosAObtener(){ 
    if (this.distanciaMision > 49) {
    return 10  
    }
    else {
    return 5 
    }
    }

}

const liberarFiona = new liberarUnaPrincesa('Lord Farquaad', 'liberarFiona', 4) 

const buscarPiedraFilosofal = new buscarObjetoMagico('Gandalf','buscarPiedraFilosofal', 40)

//Se asignan las misiones a Shrek//

shrek.asignarMision(liberarFiona)
shrek.asignarMision(buscarPiedraFilosofal)

//Se muestran las misiones dificiles//

console.log(shrek.misionesDificiles())

//Se muestran los solicitantes de las misiones (sean dificiles o no)//

console.log(shrek.quienesSolicitan())

//Se muestra la cantidad de puntos totales a obtener por shrek//

console.log(shrek.cantidadDePuntos())

//Queda lista la función CambiarCantidadDeTrolls por si se desean modificar los trolls que custodian a Fiona//
//Se deja la posibilidad de crear nuevas misiones de los mismos tipos con nuevos "Const" o nuevos tipos de mision con Class y Extends// 
