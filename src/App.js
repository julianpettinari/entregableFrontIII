import { useState } from "react";
import Cabecera from './components/Header';
import List from './components/List';
// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.



function App(product) {

  const [cart, setCart] = useState(0);
  function addItem() {     
        setCart(cart + 1)
}

  return (
    <div className="App">
      <Cabecera addToCart={cart} />
      <List Cart={addItem}/>
    </div>
  );
}

export default App;
