import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

function App() {
  // const [ativo, setAtivo] = React.useState(false);
  // const [dados, setDados] = React.useState({ nome: 'Lucas', idade: '29' });

  // function handleClick() {
  //   setAtivo(!ativo);
  //   setDados({ ...dados, faculdade: 'Incompleta' });
  // }w
  const [modal, setModal] = React.useState(false);

  return (
    <>
      {/* <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button> */}
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </>
  );
}

export default App;
