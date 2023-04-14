import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductoTicket from "../components/ProductoTicket";
import { movies } from "../Controllers/MoviesController";
import { vaciar_carrito } from "../features/cart/cartSlice";

const Carrito = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    setTimeout(() => {
      setIsPagando(false);
      setIsSimulandoPago(true);
      setTimeout(() => {
        //agrega los asientos en el controller (localstorage)

        if (localStorage.getItem("movies")) {
          var stock = JSON.parse(localStorage.getItem("movies"));
        } else {
          var stock = movies;
        }

        //recorre las peliculas del carrito
        tickets.forEach((pelicula) => {
          //obtiene los horarios
          let horarios = pelicula.horarios;
          //recorre los horarios
          horarios.forEach((horario) => {
            if (horario.asientos_seleccionados.length > 0) {
              //si tiene asientos seleccionados los obtiene
              let asientos = horario.asientos_seleccionados;

              //encuentra la pelicula del stock
              let buscado = stock.find((ticket) => {
                return ticket.id == 1;
              });

              //busca el horario del stock
              let _horario = buscado.horarios.find((h) => {
                return h.horario == horario.horario;
              });

              _horario.asientos_ocupados = [..._horario.asientos_ocupados, ...asientos];
            }
          });
        });

        //actualiza el stock
        localStorage.setItem("movies", JSON.stringify(stock));
        //vacia el carrito
        dispatch(vaciar_carrito());

        navigate("/pagoExitoso");
      }, 1000);
    }, 1000);
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
      // console.log(entradas);
    }
  };
  return (
    <>
      <div className="relative min-h-screen px-4 text-white bg-slate-800 md:px-32 fade-in">
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
          <div className="flex items-center p-4 my-5 border rounded-lg animate-pulse">
            <svg
              className="w-10 mr-2 animate-spin"
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

            <p>Simulando verificación de asientos disponibles...</p>
          </div>
        )}
        {isSimulandoPago && (
          <>
            <div className="flex items-center p-4 my-5 border rounded-lg animate-pulse">
              <svg
                className="w-10 mr-2 animate-spin"
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
              <p>Simulando pago...</p>
            </div>
          </>
        )}
        {cantidad_tickets > 0 && (
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <p>Total: ${precio_total}</p>
            <button className="px-2 py-1 bg-red-700 rounded-lg" onClick={pagar}>
              Pagar Tickets
            </button>
          </div>
        )}
        <br /> <br />
      </div>
    </>
  );
};

export default Carrito;
