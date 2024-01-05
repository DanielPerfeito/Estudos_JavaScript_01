

//Array para testes.
const personagens = [
    {nivel: 55, nome:"Habacuque", raca: "Humano", classe: "Mago"},
    {nivel: 70, nome:"Minemozine", raca: "Humano", classe: "Cavaleiro da morte"},
    {nivel: 10, nome:"Chakalan", raca: "Elfo Sangrento", classe: "Bruxo"},
    {nivel: 20, nome:"Kallaneia", raca: "Elfo Noturno", classe: "Ladino"},
    {nivel: 47, nome:"Temar", raca: "Elfo Noturno", classe: "Caçador"}
];

//MAP- Cria um novo Array com base em um array já existente.

/*const nomes = [];

for(let i = 0; i < personagens.length ; i++){
    nomes.push(personagens[i].nome);
} 
*/

const nomes = personagens.map(function(personagem){
    return personagem.nome
})

console.log(nomes)


//FILTER - Serve para filtrar elementos especificos de um array para criar um novo array com esses elementos.


//Filtrando com o método tradicional:
/*const elfosNoturnos = [];

for(let i = 0; i < personagens.length; i++){
    if (personagens[i].raca === "Elfo Noturno"){
        elfosNoturnos.push(personagens[i])
    }

}

console.log(elfosNoturnos)*/

//Filtrando com o Filter()

const humanos = personagens.filter(function (personagem){
    return personagem.raca === "humano"
});

console.log(humanos);


//REDUCE - Transforma um array em um outro tipo de dado, elemento ou valor diferente.

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function(valorAcumulado, personagem){

},{})


//SORT - usado para mudar a ordem dos elementos de um array de acordo com um critério especifico.

personagens.sort(function(a, b){
    return a.nivel - b.nivel
});

console.log(personagens)