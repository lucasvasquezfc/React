// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
import React from 'react';

const App = () => {
  const [dados, setDados] = React.useState();
  const [carregando, setCarregando] = React.useState(false);
  const [target, setTarget] = React.useState(null);

  async function handleFetch(event) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event}`
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
    setTarget(event);
  }

  function handleClick(click) {
    let event = click.target.innerText;
    setCarregando(true);
    handleFetch(event);
  }

  React.useEffect(() => {
    if (target) {
      localStorage.setItem('produto', target);
      handleFetch(target);
    } else {
      const newTarget = localStorage.getItem('produto', target);
      handleFetch(newTarget);
    }
  }, [target]);

  return (
    <>
      <h1>Preferência: {target}</h1>
      <button onClick={handleClick} style={{ marginRight: '1rem' }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      {dados && (
        <div>
          {carregando && <p>Carregando...</p>}
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco}</p>
        </div>
      )}
    </>
  );
};

export default App;
