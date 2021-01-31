class Importador{
    constructor(){
        console.log("Contrucció de l'importador")
    }
    importarJS(nom) {
        let s = document.createElement("script");
        s.src = nom;
        document.querySelector("head").appendChild(s);
    }
}