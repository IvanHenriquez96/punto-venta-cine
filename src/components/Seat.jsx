import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { agregar_al_carrito, quitar_del_carrito } from "../features/cart/cartSlice";

const Seat = ({ nombre = "", asientosOcupados, datosMovie, horarioSeleccionado }) => {
  const dispatch = useDispatch();

  const [isOcupado, setIsOcupado] = useState(false);
  const [isSeleccionado, setIsSeleccionado] = useState(false);

  //Verifica si está ocupado y setea el estado
  useEffect(() => {
    if (asientosOcupados.includes(nombre)) {
      setIsOcupado(true);
    } else {
      setIsOcupado(false);
    }
  }, [asientosOcupados]);

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
        // console.log(true); //lo quiere agregar
        // console.log(datosMovie, horarioSeleccionado);

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
