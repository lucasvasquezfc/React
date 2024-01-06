import React from 'react';
import Produto from './Produto';

function App() {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Ativado' : 'Desativado'}
      </button>
    </>
  );
}

export default App;
