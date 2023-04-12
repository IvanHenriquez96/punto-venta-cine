import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregar_al_carrito, quitar_del_carrito } from "../features/cart/cartSlice";

const Seat = ({ nombre = "", asientosOcupados, datosMovie, horarioSeleccionado }) => {
  const dispatch = useDispatch();

  const [isOcupado, setIsOcupado] = useState(false);
  const [isSeleccionado, setIsSeleccionado] = useState(false);

  const tickets = useSelector((state) => state.cart.tickets);

  //Verifica si está ocupado y setea el estado
  useEffect(() => {
    setIsSeleccionado(false); //al renderizar por defecto lo deselecciona
    if (asientosOcupados.includes(nombre)) {
      setIsOcupado(true);
    } else {
      setIsOcupado(false);
    }

    //verifica si ya está seleccionado (aggregado al carrito y lo marca como seleccionado)
    let pelicula = tickets.find((ticket) => ticket.id === datosMovie.id);
    let horarios = pelicula.horarios[horarioSeleccionado];

    if (horarios.asientos_seleccionados.includes(nombre)) {
      setIsSeleccionado(true);
    } else {
      setIsSeleccionado(false);
    }
  }, [asientosOcupados, horarioSeleccionado]);

  const toggleSeat = (e) => {
    if (!isOcupado) {
      setIsSeleccionado(!isSeleccionado);

      let asiento_seleccionado = {
        id_pelicula: datosMovie.id,
        nombre: datosMovie.nombre,
        horario: datosMovie.horarios[horarioSeleccionado].horario,
        asiento: nombre,
        precio: datosMovie.precio,
      };

      if (!isSeleccionado) {
        dispatch(agregar_al_carrito(asiento_seleccionado));
      } else {
        dispatch(quitar_del_carrito(asiento_seleccionado));
      }
    }
  };

  return (
    <div className="group">
      {isOcupado ? (
        <div
          className={`cursor-pointer h-7 md:h-14 md:mx-auto my-2 mx-1 font-semibold md:w-12 rounded-tl-xl rounded-tr-xl bg-gray-600`}
        >
          <p className="text-sm text-center text-gray-400">{nombre}</p>
        </div>
      ) : (
        <div
          onClick={toggleSeat}
          nombre={nombre}
          className={`cursor-pointer h-7 md:h-14 md:mx-auto my-2 mx-1 font-semibold md:w-12 rounded-tl-xl rounded-tr-xl ${
            isSeleccionado ? "bg-red-600" : "bg-white"
          } md:group-hover:bg-red-400 `}
        >
          <p
            className={`text-sm text-center ${
              isSeleccionado ? "text-white" : "text-gray-600"
            }  md:group-hover:text-white`}
          >
            {nombre}
          </p>
        </div>
      )}
    </div>
  );
};

export default Seat;
