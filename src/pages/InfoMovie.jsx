import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFind } from "../hooks/useFind";
import SeatPicker from "../components/SeatPicker";

const InfoMovie = () => {
  //States
  let { id } = useParams();
  let { data, isLoading } = useFind(id);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [precioTotal, setPrecioTotal] = useState(0);

  //Functions
  const handleHorario = (e) => {
    let btnHorario = e.target;
    setHorarioSeleccionado(btnHorario.getAttribute("movie_id"));
  };

  const calcularTotal = (arrayAsientosSeleccionados) => {
    setPrecioTotal(data.precio * arrayAsientosSeleccionados.length);
  };

  if (isLoading) {
    return <p>Cargando</p>;
  } else {
    return (
      <div className="grid min-h-screen App bg-slate-800 min-w-screen text-gray-50 md:grid-cols-3 md:gap-4 fade-in">
        <div className="mx-4 md:mx-32">
          <img className="w-3/4 mx-auto my-10 md:w-full" src={data.imagen} />
          <p>
            <b>Nombre: </b>
            {data.nombre}
          </p>
          <p className="my-3">Seleccione el horario:</p>
          <div className="flex justify-center w-full px-1 py-4 border rounded-lg">
            {data.horarios.map((horario, index) => (
              <div
                key={index}
                movie_id={index}
                className={`p-1 mx-1 font-semibold  border rounded-lg cursor-pointer  hover:bg-red-800 hover:text-white ${
                  index == horarioSeleccionado
                    ? "bg-red-800 text-white border-red-900"
                    : "bg-white text-slate-800"
                }`}
                onClick={handleHorario}
              >
                {horario.horario}
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <SeatPicker
            datosMovie={data}
            horarioSeleccionado={horarioSeleccionado}
            asientosOcupados={data.horarios.asientos_ocupados}
            calcularTotal={calcularTotal}
          />

          <div className="grid grid-cols-2 p-4 mx-4 border rounded-lg my-7 gap-x-4">
            <div>
              <b>Precio Ticket:</b> ${data.precio}
            </div>
            <div>
              <b>Total</b>: ${precioTotal}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default InfoMovie;
