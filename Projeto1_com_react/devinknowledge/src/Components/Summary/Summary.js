import SummaryCard from "../SummaryCard/SummaryCard";

export default function Summary() {
    return (
      <div>
        <div id="container-card-contador">
          <SummaryCard title="Total" count={0} />
          <SummaryCard title="FrontEnd" count={0} />
          <SummaryCard title="BackEnd" count={0} />
          <SummaryCard title="FullStack" count={0} />
          <SummaryCard title="SoftSkill" count={0} />

          {/* <div class="card-contador" button id="botao-contador-total">
            <h3>Total</h3>
            <div id="contador-total" class="qtde-contador"></div>
          </div> */}
          {/* <div class="card-contador" button id="botao-contador-frontend">
            <h3>FrontEnd</h3>
            <div id="contador-frontend" class="qtde-contador"></div>
          </div>
          <div class="card-contador" button id="botao-contador-backend">
            <h3>BackEnd</h3>
            <div id="contador-backend" class="qtde-contador"></div>
          </div>
          <div class="card-contador" button id="botao-contador-fullstack">
            <h3>FullStack</h3>
            <div id="contador-fullstack" class="qtde-contador"></div>
          </div>
          <div class="card-contador" button id="botao-contador-softskill">
            <h3>SoftSkill</h3>
            <div id="contador-softskill" class="qtde-contador"></div>
          </div> */}
        </div>
      </div>
    );
  };
  