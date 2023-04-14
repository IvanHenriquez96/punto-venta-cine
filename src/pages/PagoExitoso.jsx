import React, { useEffect } from "react";

const PagoExitoso = () => {
  useEffect(() => {
    console.log("pago exitoso");
  }, []);

  return (
    <>
      <div className="min-h-screen px-4 text-white App bg-slate-800 md:px-32">
        <h2 className="text-3xl font-semibold py-7">Pago realizado con éxito!</h2>

        <p className="p-2 border rounded-lg my-7">
          ¡Muchas gracias por su compra! en estos momentos su carrito de compra debería
          estar vacío, ya que esta aplicación es una prueba para el manejo de estados
          globales utilizando <b>Redux Toolkit</b>
          <br /> <br />
          Te invito a pasar por mis otros proyectos de desarrollo en mi sitio web{" "}
          <a href="http://ihenriquez.dev" target="_blank" rel="noopener noreferrer">
            <b>ihenriquez.dev</b> un saludo!
          </a>
        </p>
      </div>
    </>
  );
};

export default PagoExitoso;
