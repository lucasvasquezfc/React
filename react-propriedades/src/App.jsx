// const Titulo = ({ cor, texto, children }) => {
//   return <h1 style={{ color: cor }}>{children ? children : texto}</h1>;
// };

import Form from './Form/Form';

function App() {
  // return (
  //   <div>
  //     <Titulo cor="red" texto="Meu título 1" />
  //     <Titulo cor="blue" texto="Meu título 2" />
  //     <Titulo cor="green" texto="Meu título 3">
  //       Isso é o children
  //     </Titulo>
  //     <Titulo texto="Meu título 4" />
  //   </div>
  // );

  return (
    <>
      <Form />
    </>
  );
}

export default App;
