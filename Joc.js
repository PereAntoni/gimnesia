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

class gestorTorn{
    constructor(){
        this.nTorns=0;
        this.torn=0;
    }
    setnTorns(n){this.nTorns=n;}
    getTorn(){return this.torn;}
    nouTorn(){  this.torn++;
                if (this.torn>=this.nTorns){this.torn=0;}
                return this.torn;}
}

class Jugador{
    constructor(nom){
        this.nom=nom;
        this.duc=0;
        this.dic=0;
        this.punts=0;
    }
    getNom(){
        return this.nom;
    }
    setDuc(x){this.duc=x;}
    setDic(x){this.dic=x;}
    setPunts(x){this.punts=x;}

    getDic(){return this.dic;}
    getDuc(){return this.duc;}
    getPunts(){return this.punts;}

    sumaDuc(j){
        this.duc++;
        if(this.duc>j.nPedres){this.duc=0;}
        return this.duc;}

    saluda(){
        return "hola";
    }
}

class J2 extends Jugador{
    saluda(){return "som un cocodril";}
}
