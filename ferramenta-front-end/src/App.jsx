import React from 'react';

// const titulo = <h1>Esse é um titulo</h1>;

// const App = () => {
//   const random = (Math.random() * 100).toFixed(2);
//   const ativo = true;

// function mostrarNome(sobrenome) {
//   return 'Lucas ' + sobrenome;
// }

//   const carro = {
//     marca: 'Ford',
//     rodas: 4,
//   };

//   const estiloP = {
//     color: 'blue',
//     fontSize: '4rem',
//   };

//   return (
//     <>
//       {titulo}
//       {mostrarNome('Vasquez')}
//       <p style={estiloP}>{new Date().getFullYear()}</p>
//       <p>{carro.marca}</p>
//       <p>{carro.rodas}</p>
//       <p className={ativo ? 'ativo' : 'inativo'}>{random}</p>
//     </>
//   );
// };

// export default App;

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

function verificar(selecionado) {
  const { cliente, idade, compras, ativa } = selecionado;

  // let total = 0;
  // compras.forEach((item) => (total += +item.preco.replace('R$ ', '')));

  const total = compras
    .map((item) => +item.preco.replace('R$ ', ''))
    .reduce((a, b) => a + b);

  // const situacao = ativa ? (
  //   <span style={{ color: 'green' }}>Ativa</span>
  // ) : (
  //   <span style={{ color: 'red' }}>Inativa</span>
  // );

  const situacao = (
    <span style={{ color: ativa ? 'green' : 'red' }}>
      {ativa ? 'Ativa' : 'Inativa'}
    </span>
  );

  const alerta = <p style={{ color: 'red' }}>Você está gastando muito</p>;

  return (
    <>
      <p>Nome: {cliente}</p>
      <p>Idade: {idade}</p>
      <p>Situação: {situacao}</p>
      <p>Total gasto: R$ {total}</p>
      {total > 10000 && alerta}
    </>
  );
}

const App = () => {
  return <>{verificar(mario)}</>;
};

export default App;
