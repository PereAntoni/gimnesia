class Importador{
    constructor(){}
    importarScript(nom) {
        let s = document.createElement("script");
        s.src = nom;
        document.querySelector("head").appendChild(s);
    }
}