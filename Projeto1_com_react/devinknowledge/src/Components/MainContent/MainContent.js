import Summary from "../Summary/Summary";
import Filter from "../Filter/Filter";
import TipCard from "../TipCard/TipCard";

const arrayInicial = [{
  titulo: "Grid vs Flex-Box",
  linguagem: "CSS",
  categoria: "FrontEnd",
  descricao:
    "A diferença crucial entre flexbox e grid, além do primeiro ser unidimensional e o outro ser bi-dimensional, é que o controle do layout no grid vem do container e no flexbox vem dos elementos.",
  video: "https://www.youtube.com/watch?v=x-4z_u8LcGc"
}]

export default function MainContent() {
  return (
    <div>
      <div id="container2">

        <Summary />
        <Filter />

        {arrayInicial.map((item) => {
          return (
            <TipCard 
          titulo={item.titulo}
          linguagem={item.linguagem}
          categoria={item.categoria}
          descricao={item.descricao}
            />
          )
        })}

        

        <div id="container-card-dica"></div>
      </div>
    </div>
  );
}
