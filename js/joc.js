class Joc{
    constructor(nom){
        this.nom=nom;
        this.codi;
        this.nPunts;
        this.nPedres=3;
        this.jugadors=[];
        //alert(arguments[1]);
        this.torn= new gestorTorn();
        this.nJugadors=0;
        
    }
    getNom(){
        return this.nom;
    }
    getJugador(x){
        return this.jugadors[x];
    }
    getTorn(){
        return this.torn.getTorn(); 
    }
    initGui(){
        console.log("Creant GUI de joc");
        this.gui = new Gui(this);
        this.gui.crearElement({tipus:"div",lloc:"body"});
        this.gui.posaHTML("la pixa liada");
        alert(this.gui);
        
    }
    nouJugador(j){
        j = new Jugador(j);
        this.jugadors.push(j);
        this.nJugadors++;
        this.torn.setnTorns(this.nJugadors);
        //console.log("Creat jugador " + this.getNom());
    }
    llistaJugadors(){
        return this.jugadors.join(",");
    }
    nouTorn(){
       this.torn.nouTorn();
       return this.torn.getTorn(); 
    }

}


