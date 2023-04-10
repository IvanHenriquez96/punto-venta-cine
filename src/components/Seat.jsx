import React, { useEffect, useState } from "react";

const Seat = ({
  nombre = "",
  asientosOcupados,
  setAsientosSeleccionados,
  asientosSeleccionados,
}) => {
  const [isOcupado, setIsOcupado] = useState(false);
  const [isSeleccionado, setIsSeleccionado] = useState(false);

  useEffect(() => {
    if (asientosOcupados.includes(nombre)) {
      setIsOcupado(true);
    }
  }, []);

  const toggleSeat = (e) => {
    if (!isOcupado) {
      setIsSeleccionado(!isSeleccionado);
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
