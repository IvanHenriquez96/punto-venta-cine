import React from "react";
import { Link } from "react-router-dom";

const CardMovie = ({ movie }) => {
  return (
    <div className="my-4">
      <img
        src={movie.imagen}
        className="border-t border-l border-r rounded-tl-xl rounded-tr-xl"
        alt=""
      />
      <div className="p-3 border-b border-l border-r rounded-br-xl rounded-bl-xl bg-slate-900">
        <h4>
          <span className="font-bold">Nombre:</span> {movie.nombre}
        </h4>
        <h4>
          <span className="font-bold">Idioma:</span> {movie.idioma}
        </h4>
        <h4>
          <span className="font-bold">Clasificación:</span> {movie.clasificacion}
        </h4>
        <h4>
          <span className="font-bold">Sala: N°</span>
          {movie.sala}
        </h4>
        <h4 className="font-bold">Funciones: </h4>
        <div className="flex p-2 mt-2 border border-white rounded gap-x-4">
          {movie.horarios.map((horario, index) => (
            <h4 key={index} className="font-semibold">
              {horario}
            </h4>
          ))}
        </div>

        <div className="flex">
          <Link
            to={`/movie/${movie.id}`}
            className="justify-center p-2 mx-auto my-4 font-bold bg-red-500 rounded cursor-pointer hover:bg-red-700"
          >
            Comprar Entradas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
