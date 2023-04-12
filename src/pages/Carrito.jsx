import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductoTicket from "../components/ProductoTicket";

const Carrito = () => {
  const tickets = useSelector((state) => state.cart.tickets);
  const cantidad_tickets = useSelector((state) => state.cart.cantidad_tickets);
  const precio_total = useSelector((state) => state.cart.precio_total);

  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    buscarEntradasSeleccionadas();
  }, []);

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
      <div className="min-h-screen px-4 text-white bg-slate-700 md:px-32 fade-in">
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

        {cantidad_tickets > 0 && (
          <div className="flex items-center justify-between p-4 my-5 border rounded-lg">
            <p>Total: ${precio_total}</p>
            <button className="px-2 py-1 bg-red-700 rounded-lg">Pagar Tickets</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Carrito;
