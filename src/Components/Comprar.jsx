import React from 'react';

export const Comprar = () => {
  const [contador, setContador] = React.useState(1);

  return (
    <>
      <p>Total:{contador}</p>
      <p>Preco: R${contador * 250}</p>
      <button onClick={() => setContador + 1}>Comprar</button>
    </>
  );
};
