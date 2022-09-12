export default function Table() {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Idade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Paula</td>
          <td>paula.senai@mail.com</td>
          <td>30</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Marcel</td>
          <td>marcel.santin@mail.com</td>
          <td>29</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
        </tr>
      </tbody>
    </table>
  );
}
