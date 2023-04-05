import React, { useState } from "react";

const Seat = () => {
  const [isDisponible, setIsDisponible] = useState(true);

  return (
    <div
      className={`h-10 mx-auto my-2  md:w-10 rounded-tl-xl rounded-tr-xl hover:bg-red-200 ${
        isDisponible ? "bg-white" : "bg-gray-400"
      }`}
    ></div>
  );
};

export default Seat;
