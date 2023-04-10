import { createContext, useContext } from "react";

export const CartContext = createContext(false);

const CartProvider = ({ children }) => {
  const [tickets, setTickets] = useState(null);
  const [precioTotal, setPrecioTotal] = useState(0);

  return (
    <CartContext.Provider
      tickets={{ tickets, setTickets }}
      precioTotal={{ precioTotal, setPrecioTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = useContext(CartContext);
