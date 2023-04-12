import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cantidad_tickets = useSelector((state) => state.cart.cantidad_tickets);
  const precio_total = useSelector((state) => state.cart.precio_total);

  const [isOpenCarrito, setIsOpenCarrito] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // console.log(tickets, precioTotal);

  const toggleCarrito = () => {
    setIsOpenCarrito(!isOpenCarrito);
  };
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header
      aria-label="Site Header"
      className="fixed top-0 left-0 right-0 z-10 border-b border-red-100 bg-slate-900 text-gray-50"
    >
      <div className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" className="p-2 lg:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link to="/" className="flex">
            {/* <span className="text-black sr-only">Logo</span>
          <span className="inline-block w-32 h-10 bg-red-200 rounded-lg"> LOGOO</span> */}
            {/* <h2>ihenriquez - Punto de Venta</h2> */}
            <img
              className="w-12"
              src="https://cdn-icons-png.flaticon.com/512/1038/1038100.png"
              alt=""
            />
          </Link>
        </div>

        <div className="flex items-center justify-end flex-1 gap-8">
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide"
          >
            <Link
              to="/"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Cartelera
            </Link>

            <Link
              to="/cart"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Carrito
            </Link>
          </nav>

          <div className="flex items-center">
            <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
              <span>
                <div
                  // to="/carrito"
                  className="relative flex block p-4 border-b-4 border-transparent cursor-pointer hover:border-red-700"
                  onClick={toggleCarrito}
                >
                  <svg
                    className="w-4 h-4 mt-1 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <div className="w-6 h-6 text-center bg-red-700 rounded-full">
                    <p>{cantidad_tickets}</p>
                  </div>

                  {isOpenCarrito && (
                    <div
                      id="carrito"
                      className="absolute right-0 z-10 p-4 border-2 border-white bg-slate-700 top-16 w-44 rounded-xl fade-in"
                    >
                      <p>Tickets: {cantidad_tickets}</p>
                      <p>Total: ${precio_total}</p>
                      <Link to="/cart">
                        <button className="px-2 py-1 my-2 text-sm bg-red-700 rounded-lg">
                          Ir al Carrito
                        </button>
                      </Link>
                    </div>
                  )}

                  <span className="sr-only">Cart </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      {isOpenMenu && (
        <div className="fixed z-20 w-1/2 h-full bg-opacity-90 bg-slate-700 md:hidden">
          <div className="ml-3">
            <p className="my-5 font-semibold">
              <Link to="/">Cartelera</Link>
            </p>
            <p className="my-5 font-semibold">
              <Link to="/cart">Carrito</Link>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
