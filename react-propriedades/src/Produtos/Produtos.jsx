import Titulo from '../Titulo';
import Produto from './Produto';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <>
      <Titulo>Produtos</Titulo>
      {produtos.map((item) => (
        <Produto key={produtos.nome} {...item} />
      ))}
    </>
  );
};

export default Produtos;
