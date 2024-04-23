const shrek = {

    misiones: [],
    
    asignarMision: function(Mision) {
        this.misiones.push(Mision);
    },
    
    misionesDificiles: function() {
    return this.misiones.filter(Mision => Mision.esDificil()).map(Mision => Mision.nombreDeLaMision)    
    },
    
    quienesSolicitan: function() {
        return this.misiones.map(Mision => Mision.solicitante)
    },
    
    cantidadDePuntos: function(){
        return this.misiones.reduce((acumulador, Mision) => acumulador + Mision.puntosAObtener(), 0)
    }
    
    }
    
    class Mision {
    
        constructor(nombreDeQuienSolicitaLaMision, nombreMision){
            this.solicitante = nombreDeQuienSolicitaLaMision
            this.nombreDeLaMision = nombreMision    
        }
        
        esDificil(){
            return this.solicitante.charAt(0) === 'G'
        } 
    
        puntosAObtener(){
            return 0
        }
        
    }
    
    class LiberarUnaPrincesa extends Mision {
        
        constructor(nombreDeQuienSolicitaLaMision, nombreMision, cantidadDeTrolls){
            super(nombreDeQuienSolicitaLaMision, nombreMision)
            this.numeroDeTrolls = cantidadDeTrolls 
        }
    
        esDificil(){
            return super.esDificil() && this.numeroDeTrolls > 3
        }
    
        puntosAObtener(){
            return 2 * this.numeroDeTrolls
        }  
    
        cambiarCantidadDeTrolls(nuevaCantidadDeTrolls){
            this.numeroDeTrolls = nuevaCantidadDeTrolls
        }
    
    } 
    
    
    class BuscarObjetoMagico extends Mision{
    
        constructor(nombreDeQuienSolicitaLaMision, nombreMision, distanciaACaminar){
            super(nombreDeQuienSolicitaLaMision, nombreMision)
            this.distanciaMision = distanciaACaminar 
        }
    
       esDificil(){
        return super.esDificil() && this.distanciaMision > 100
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
    
    const liberarFiona = new LiberarUnaPrincesa('Lord Farquaad', 'liberarFiona', 4) 
    
    const buscarPiedraFilosofal = new BuscarObjetoMagico('Gandalf','buscarPiedraFilosofal', 40)
    
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
