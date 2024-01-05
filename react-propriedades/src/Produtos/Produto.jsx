import React from 'react';

const estiloDiv = {
  border: '2px solid #ccc',
  padding: '1rem',
  margin: '1rem 0',
};

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={estiloDiv} key={nome}>
      <h4>{nome}</h4>
      <ul>
        {propriedades.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
