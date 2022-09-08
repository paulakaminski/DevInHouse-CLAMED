//Crie um componente de soma que recebe duas propriedades (números), e que retorna uma frase: “A soma dos números é __”

export default function Soma({ num1, num2 }) {
    return (
      <div>
        <p>
          A soma de {num1} + {num2} é {num1 + num2}
        </p>
      </div>
    );
  };
  