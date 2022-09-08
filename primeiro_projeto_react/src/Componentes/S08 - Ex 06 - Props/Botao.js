//Crie um componente de botão com as props background (Cor de fundo do botão) e title (Texto do botão).

export default function Botao({ corDeFundo, titulo }) {
  return (
    <div>
      <button style={{ backgroundColor: corDeFundo }}>{titulo}</button>
    </div>
  );
};
