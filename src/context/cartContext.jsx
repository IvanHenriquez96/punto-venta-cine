import { createContext, useReducer, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // const [tickets, setTickets] = useState(null);
  const [precioTotal, setPrecioTotal] = useState(0);

  const [tickets, dispatch] = useReducer(ticketsReducer, []);

  function ticketsReducer(state, action) {
    switch (action.type) {
      case "agregar_ticket_carrito":
        //Agrega ticket al carrito
        break;

      case "quitar_ticket_carrito":
        //Quita ticket al carrito
        break;

      default:
        break;
    }
  }

  return (
    <CartContext.Provider
      value={{
        tickets: { tickets, dispatch },
        precioTotal: { precioTotal, setPrecioTotal },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// export const useCartContext = useContext(CartContext);
