/*
creando un objeto backpack
*/
const backpack ={
    name: "Mochila diaria",
    volumen: 30,
    color: "grey",
    pocketNum: 10,
   
    /* strapLenth es correa o cintillo */
    strapLength:{
        left: 26,
        rigth: 27
    },
    /* tapa */
    lidOpen: false,
    toggleLid : function(lidStatus){
        this.lidOpen = lidStatus;
        /* lidStatus es una funcion */

    }

};
//console.log(backpack);
/* es para traer propiedades, si es con agregado/anidada va con todas las caracteristicas */
console.log("El nombre de la mochila es: " + backpack.name);
console.log("El tamaño del corre derechas es:" + backpack.strapLength.rigth)
var query="pocketNum";
/* [] para una variable, no sirve () ni {} */
console.log(backpack[query]);

const objeto2 ={

   
};
/* Array parte de cero, es el que cuenta*/
/* collection era para usar en array*/ let collection = ["Enchiladas" /*0*/, "Tamales" /*1*/, "Chiles en nogada" /*2*/, "Empanadas", "Churros", 5, true]
console.log(collection[2]);
collection[5] = "Tacos";
console.log(collection);
console.log(collection.length);
collection[6] = "Chilaquiles";
collection.toUppercase(collection[1]);
console.log(collection);