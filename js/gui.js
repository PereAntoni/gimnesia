class Gui{
    constructor(o){
        this.damunt=o;
        console.log("conectant gui damunt");
        //this.div=this.crearElement({tipus:"div",lloc:"body"});
    }
    crearElement(e){
        let tipusElement = e.tipus;
        let lloc = e.lloc; 
        let text= e.text;
        let nouElement = document.createElementNS("http://www.w3.org/1999/xhtml",tipusElement);
        console.log("|-creant element")
        //this.div = div;
        nouElement.innerHTML=text;
        document.querySelector(lloc).appendChild(nouElement);
        return nouElement;
    }

    posaHTML(t){
        console.log("posant html: " + t);
        //this.e.innerHTML="catxondeo";
        this.e.innerHTML=t;
    }

    activaJugador(o){
        
    }
    
}