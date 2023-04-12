import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFind } from "../hooks/useFind";
import SeatPicker from "../components/SeatPicker";
import { useSelector } from "react-redux";

const InfoMovie = () => {
  //States
  let { id } = useParams();
  let { data, isLoading } = useFind(id);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);

  const precio_total = useSelector((state) => state.cart.precio_total);

  //Functions
  const handleHorario = (e) => {
    let btnHorario = e.target;
    setHorarioSeleccionado(btnHorario.getAttribute("movie_id"));
    console.log("deberia refrescarse");
  };

  if (isLoading) {
    return <p>Cargando</p>;
  } else {
    return (
      <div className="grid min-h-screen App bg-slate-800 min-w-screen text-gray-50 md:grid-cols-3 md:gap-4 fade-in">
        <div className="mx-4 md:mx-32">
          <img className="w-3/4 mx-auto my-10 rounded-lg md:w-full" src={data.imagen} />
          <p>
            <b>Nombre: </b>
            {data.nombre}
          </p>
          <p className="my-3 font-bold">Seleccione el horario:</p>
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
          />

          <div className="grid grid-cols-2 p-4 mx-4 border rounded-lg my-7 gap-x-4">
            <div>
              <b>Precio:</b> ${data.precio}
            </div>
            <div>
              <b>Total</b>: ${precio_total}
            </div>
          </div>

          <div className="flex justify-center w-100">
            <Link
              to="/cart"
              className="w-full p-1 mx-4 font-semibold text-center bg-red-600 rounded-lg cursor-pointer mb-7 md:w-1/2"
            >
              IR AL CARRITO
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default InfoMovie;
