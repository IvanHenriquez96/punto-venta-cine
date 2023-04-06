import React, { useState } from "react";

const Seat = () => {
  const [isDisponible, setIsDisponible] = useState(true);

  return (
    <div
      className={`h-7 md:h-14 md:mx-auto  my-2 mx-1  md:w-12 rounded-tl-xl rounded-tr-xl hover:bg-red-200 ${
        isDisponible ? "bg-white" : "bg-gray-400"
      }`}
    ></div>
  );
};

export default Seat;
