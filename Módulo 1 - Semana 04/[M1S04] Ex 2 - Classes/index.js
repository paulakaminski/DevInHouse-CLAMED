// Crie uma classe chamada Filme com os atributos nome, anoDeLancamento  e diretor.
// Fora do escopo dessa classe, instancie ela e preencha os campos acessando seus atributos por meio do ponto (.).

class Filme {
  nome;
  anoDeLancamento;
  diretor;
}

const umFilme = new Filme();
umFilme.nome = "Titanic";
umFilme.anoDeLancamento = 1998;
umFilme.diretor = "James Cameron";

console.log(umFilme);