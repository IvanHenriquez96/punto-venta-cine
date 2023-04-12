import React, { useState } from "react";
import Seat from "./Seat";

const SeatPicker = ({ datosMovie, horarioSeleccionado = null, calcularTotal }) => {
  // console.log("entra a SeatPicker");
  const filas = ["A", "B", "", "C", "D", "E", "F", "G", "H", "", "I", "K"];
  const asientos = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <div className="grid grid-cols-3 p-4 mx-4 border rounded-lg my-7">
        <div className="mx-auto">
          <div className="w-5 h-5 mx-auto bg-white rounded-full"></div>
          <p>Disponible</p>
        </div>
        <div className="mx-auto">
          <div className="w-5 h-5 mx-auto bg-gray-600 rounded-full"></div>
          <p>Ocupado</p>
        </div>
        <div className="mx-auto">
          <div className="w-5 h-5 mx-auto bg-red-600 rounded-full"></div>
          <p>Seleccionado</p>
        </div>
      </div>

      {horarioSeleccionado == null ? (
        <div className="flex items-center justify-center mx-4 text-3xl font-bold border rounded-lg my-7 md:h-2/3 h-96">
          Seleccione un horario
        </div>
      ) : (
        <div className="p-1 mx-4 border rounded-lg my-7 md:min-h-2/3 md:h-2/3 min-h-96 md:p-5 fade-in">
          <div className="grid grid-cols-12">
            {filas.map((fila, index) => {
              return (
                <div key={index}>
                  {asientos.map((asiento, index) => {
                    return (
                      fila !== "" && (
                        <Seat
                          key={index}
                          asientosOcupados={
                            datosMovie.horarios[horarioSeleccionado].asientos_ocupados
                          }
                          nombre={`${fila}${asiento}`}
                          datosMovie={datosMovie}
                          horarioSeleccionado={horarioSeleccionado}
                        />
                      )
                    );
                  })}
                </div>
              );
            })}
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
    </>
  );
};

export default SeatPicker;
