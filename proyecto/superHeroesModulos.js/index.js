let superHeroes = [
    {
        nombre: "Batman",
    },
    {
        nombre: "Flash",
    },
    {
        nombre: "Super Man",
    },
];

let nombresSuperHeroes = []; 

for (let i = 0; i < superHeroes.length; i++) {
    nombresSuperHeroes.push(superHeroes[i].nombre); 
}

module.exports = nombresSuperHeroes.join(" , "); 
