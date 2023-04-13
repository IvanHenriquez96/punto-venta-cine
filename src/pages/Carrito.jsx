import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductoTicket from "../components/ProductoTicket";
import { pagar_carrito } from "../features/cart/cartSlice";

const Carrito = () => {
  const dispatch = useDispatch();

  const tickets = useSelector((state) => state.cart.tickets);
  const cantidad_tickets = useSelector((state) => state.cart.cantidad_tickets);
  const precio_total = useSelector((state) => state.cart.precio_total);

  const [entradas, setEntradas] = useState([]);
  const [isPagando, setIsPagando] = useState(false);
  const [isSimulandoPago, setIsSimulandoPago] = useState(false);

  useEffect(() => {
    buscarEntradasSeleccionadas();
  }, []);

  const pagar = () => {
    setIsPagando(true);

    //verifica los asientos
    console.log("mis tickts en el carrito", tickets);

    setTimeout(() => {
      setIsPagando(false);

      dispatch(pagar_carrito());

      setIsSimulandoPago(true);
    }, 2000);
  };

  const buscarEntradasSeleccionadas = async () => {
    let ent = [];
    if (cantidad_tickets > 0) {
      await tickets.forEach(async (ticket) => {
        await ticket.horarios.forEach((horario) => {
          // console.log(horario.asientos_seleccionados.length);
          if (horario.asientos_seleccionados.length > 0) {
            let obj = {
              id: ticket.id,
              ticket: ticket,
              horario: horario,
            };
            ent.push(obj);
          }
        });
      });

      setEntradas(ent);
      console.log(entradas);
    }
  };
  return (
    <>
      <div className="relative min-h-screen px-4 text-white bg-slate-700 md:px-32 fade-in">
        <h2 className="text-3xl font-semibold py-7">Carrito</h2>

        {cantidad_tickets == 0 ? (
          <div>
            <p>Su carrito se encuentra vacío.</p>
            <Link to="/">
              <button className="p-2 my-5 bg-red-700 rounded-lg">
                Ir a la cartelera
              </button>
            </Link>
          </div>
        ) : (
          <div>
            {entradas.map((entrada, index) => (
              <ProductoTicket key={index} entrada={entrada} />
            ))}
          </div>
        )}

        {isPagando && (
          <div className="p-4 my-5 border rounded-lg animate-pulse">
            <p>Verificando si sus asientos siguen disponibles...</p>
          </div>
        )}

        {cantidad_tickets > 0 && (
          <div className="flex items-center justify-between p-4 my-5 border rounded-lg">
            <p>Total: ${precio_total}</p>
            <button className="px-2 py-1 bg-red-700 rounded-lg" onClick={pagar}>
              Pagar Tickets
            </button>
          </div>
        )}

        {isSimulandoPago && (
          <div className="absolute inset-0 flex items-center justify-center border rounded-lg bg-slate-800 md:inset-44 inset-x-10 inset-y-44 fade-in">
            <svg
              className="w-10 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#FFFF"
                ></path>
                <path
                  d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                  fill="red"
                ></path>
              </g>
            </svg>

            <div className="">Simulando pago...</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Carrito;
