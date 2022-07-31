// Dado o array de cidades abaixo, filtre apenas as cidades com mais de 200000 habitantes;

let cidades = [
  { nome: "Patos de Minas", populacao: 153585 },
  { nome: "Lages", populacao: 157349 },
  { nome: "Ibiúna", populacao: 79479 },
  { nome: "Maringá", populacao: 403063 },
  { nome: "Curitiba", populacao: 1963726 },
  { nome: "Florianópolis", populacao: 508826 },
  { nome: "Pato Branco", populacao: 84779 },
];

let cidadesFiltradas = cidades.filter(function (item) {
  return item.populacao >= 200000;
});
console.log(cidadesFiltradas);
