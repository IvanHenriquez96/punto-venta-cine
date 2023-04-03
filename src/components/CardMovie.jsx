import React from "react";

const CardMovie = ({ nombre, imagen }) => {
  return (
    <div className="my-4">
      <img src={imagen} alt="" />
      <div className="my-2">
        <h4>Nombre: {nombre}</h4>
      </div>
    </div>
  );
};

export default CardMovie;
