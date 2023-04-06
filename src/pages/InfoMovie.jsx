import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Seat from "../components/Seat";
import { useFind } from "../hooks/useFind";

const InfoMovie = () => {
  //States
  let { id } = useParams();
  let { data, isLoading } = useFind(id);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);

  //Functions
  const handleHorario = (e) => {
    let btnHorario = e.target;
    setHorarioSeleccionado(btnHorario.getAttribute("movie_id"));
    // btnHorario.classList.add("focus");
  };

  if (isLoading) {
    return <p>Cargando</p>;
  } else {
    return (
      <div className="grid min-h-screen App bg-slate-800 min-w-screen text-gray-50 md:grid-cols-3 md:gap-4">
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
                {horario}
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          {/* <div className="grid grid-cols-3 p-4 mx-4 border rounded-lg my-7 md:gap-x-4">
            <div className="md:flex">
              <div className="w-6 h-6 mx-auto bg-gray-200 rounded-full md:h-5 md:w-5"></div>
              <p className="mx-6 md:ml-2">Disponible</p>
            </div>
            <div className="md:flex">
              <div className="w-6 h-6 mx-auto bg-gray-600 rounded-full md:h-5 md:w-5"></div>
              <p className="mx-6 mx-auto md:ml-2">No Disponible</p>
            </div>
            <div className="md:flex">
              <div>
                <div className="w-6 h-6 mx-auto bg-red-600 rounded-full md:h-5 md:w-5"></div>
              </div>
              <p className="mx-auto md:ml-2">Seleccionado</p>
            </div>
          </div> */}

          <div className="grid grid-cols-2 p-4 mx-4 border rounded-lg my-7 gap-x-4">
            <div>
              <b>Precio Ticket:</b> ${data.precio}
            </div>
            <div>
              <b>Total</b>: $0
            </div>
          </div>

          {horarioSeleccionado == null ? (
            <div className="flex items-center justify-center mx-4 text-3xl font-bold border rounded-lg my-7 md:h-2/3 h-96">
              Seleccione un horario
            </div>
          ) : (
            <div className="p-1 mx-4 border rounded-lg my-7 md:min-h-2/3 md:h-2/3 min-h-96 md:p-5">
              <div className="grid grid-cols-12">
                <div>
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                </div>
                <div>
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                </div>
                <ul></ul>
                <div>
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                </div>
                <div>
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                </div>
                <div>
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                </div>
                <div>
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                </div>
                <div>
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                </div>
                <div>
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                </div>
                <ul></ul>
                <div>
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                </div>
                <div>
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                  <Seat />
                </div>
              </div>

              <div
                className="w-11/12 h-10 mx-auto my-5 bg-white"
                style={{ transform: "perspective(100px) rotateX(10deg)" }}
              ></div>

              {/* <div
                className="h-20 mx-auto mt-5 bg-white w-4/4"
                style={{ transform: "perspective(100px) rotateX(3deg)" }}
              ></div> */}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default InfoMovie;
