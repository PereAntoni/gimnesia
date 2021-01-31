class JocFotos extends Joc{
    constructor(a){
        super(a);
        this.email="";
        this.pregunta={ "foto" : "https://static2.abc.es/media/play/2020/11/13/baby-yoda-kSQH--1024x512@abc.jpg",
                        "resposta1" :"Josep Lluís Nuñez",
                        "resposta2" :"Gizmo",
                        "resposta3" :"Yoda",
                        "resposta4" :"Furby"};
        } 
    initGui(){
        console.log("Creant GUI de joc Fotos");
        this.titol = new Titol(this);
        let a= "prova";
        this.correu= new BotoEmail(this);
        this.escenari = new EscenariBotons(this);
        this.resposta1 = new BotoResposta(this,this.pregunta.resposta1);
        this.resposta2 = new BotoResposta(this,this.pregunta.resposta2);
        this.resposta3 = new BotoResposta(this,this.pregunta.resposta3);
        this.resposta4 = new BotoResposta(this,this.pregunta.resposta4);
        this.imatge= new Imatge(this);
        
        //alert(this.damunt.getNom());
        //this.titol.posaHTML("cucurutxo");
        //this.gui.div=this.gui.crearElement({tipus:"div",lloc:"body"});
        //this.gui.div.posaHTML("la pixa un lio");
        //this.gui.div.posaHTML("this.gui.div");
        
    }
    
}

class EscenariBotons extends Gui{
    constructor(o) {
        super(o);
        this.e=this.crearElement({tipus:"div",lloc:"body",text:""});
        //this.e.addEventListener("click", ev => this.pitjat());
        this.e.id="zonaJoc";this.e.classList.add("row");
        
        let col1=this.crearElement({tipus:"div",lloc:"#zonaJoc",text:""});
        col1.classList.add("col-sm-6");
        col1.id="foto";
        let col2=this.crearElement({tipus:"div",lloc:"#zonaJoc",text:""});
        col2.classList.add("col-sm-6");
        col2.id="botons";

        
    }

}

class Boto extends Gui{
    constructor(o,x) {
        super(o);
        this.e=this.crearElement({tipus:"button",lloc:x});
        this.e.addEventListener("click", ev => this.pitjat());
        this.e.classList.add("btn-block");
        this.e.classList.add("btn-primary");
    }

    prova(){alert("me crida");}
}

class BotoEmail extends Boto{
    constructor(o){
        super(o,"body");
        console.log("Creant boto email");
        this.posaHTML("Comença a jugar");
    }
    pitjat(){
        console.log("has pitjat el boto de enviar email a API");
        this.email=prompt("Posa el teu email corporatiu");
        alert(this.email);
        //this.damunt.
    }
}

class BotoResposta extends Boto{
    constructor(o,t){
        super(o,"#botons");
        console.log("Creant boto resposta");
        this.posaHTML(t);
    }
    pitjat(){
        alert("has pitjat el boto de enviar resposta API");
    }

}

class Imatge extends Gui{
    constructor(o){
        super(o);
        console.log("creant imatge");
        this.e=this.crearElement({tipus:"img",lloc:"#foto"});
        this.e.classList.add("img-fluid");
        this.e.src=this.damunt.pregunta.foto;

    }
}

class Titol extends Gui{
    constructor(o) {
        super(o);
        this.e=this.crearElement({tipus:"h1",lloc:"body",text:this.damunt.getNom()})
        this.e.classList.add("jumbotron");
    }


}