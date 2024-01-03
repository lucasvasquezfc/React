// function App() {
//   const livros = [
//     { nome: 'A Game of Thrones', ano: 1996 },
//     { nome: 'A Clash of Kings', ano: 1998 },
//     { nome: 'A Storm of Swords', ano: 2000 },
//   ];

//   return (
//     <ul>
//       {livros
//         .filter(({ ano }) => ano >= 1998)
//         .map(({ nome, ano }) => (
//           <li key={ano}>
//             {nome}, {ano}
//           </li>
//         ))}
//     </ul>
//   );
// }

// export default App;

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  const dados = produtos.filter(
    ({ preco }) => +preco.replace('R$ ', '') > 1500
  );

  return (
    <section style={{ padding: '10px' }}>
      {dados.map(({ id, nome, preco, cores }) => {
        let valor = +preco.replace('R$ ', '');

        const renderLista = cores.map((cor) => (
          <li
            key={id}
            style={{ background: cor, color: '#fff', margin: '5px 0' }}
          >
            {cor}
          </li>
        ));

        return (
          <div key={id}>
            <h1>{nome}</h1>
            <p>Preço: R$ {valor}</p>
            <ul style={{ listStyle: 'none' }}>{renderLista}</ul>
          </div>
        );
      })}
    </section>
  );
};

export default App;
