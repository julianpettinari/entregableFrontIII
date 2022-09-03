// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
import { useState } from "react";


export default function Item(product) {
  const [count, setCount] = useState(product.stock);
  const subtractItem = () => {     
        if (count >= 1) {
            setCount(count - 1);
            
          }
        else {
            alert("Sin Stock")
      }
}
const addAndSubtract = () => {
  subtractItem();
  product.Cart();
}
  return (
    <div className='product'>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {count>0?<h5>En stock: {count}</h5>:<h5><span>Agotado</span></h5>}
      <button disabled={count === 0} onClick={()=>addAndSubtract()}>{count===0?"Sin stock":"Comprar"}</button>
    </div>
  )
};

