import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { useSelector, useDispatch } from "react-redux";
import { agregar_al_carrito, quitar_del_carrito } from "../features/cart/cartSlice";

const Navbar = () => {
  const { tickets, precioTotal } = useContext(CartContext);

  const cantidad_tickets = useSelector((state) => state.cart.cantidad_tickets);
  const precio_total = useSelector((state) => state.cart.precio_total);
  const dispatch = useDispatch();

  // console.log(tickets, precioTotal);
  return (
    <header
      aria-label="Site Header"
      className="border-b border-red-100 bg-slate-900 text-gray-50"
    >
      <div className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" className="p-2 lg:hidden">
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
              href="/news"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              News
            </Link>

            <Link
              href="/contact"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center">
            <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
              <span>
                <div
                  // to="/carrito"
                  className="block p-6 border-b-4 border-transparent cursor-pointer hover:border-red-700"
                >
                  <svg
                    className="w-4 h-4"
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
                  {cantidad_tickets} {precio_total}
                  <span className="sr-only">Cart </span>
                </div>
              </span>

              <span>
                <Link
                  to="/account"
                  className="block p-6 border-b-4 border-transparent hover:border-red-700"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span className="sr-only"> Account </span>
                </Link>
              </span>

              <span className="hidden sm:block">
                <a
                  href="/search"
                  className="block p-6 border-b-4 border-transparent hover:border-red-700"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>

                  <span className="sr-only"> Search </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <button className="mr-5" onClick={() => dispatch(agregar_al_carrito(6100))}>
        agregar
      </button>
      <button onClick={() => dispatch(quitar_del_carrito(6100))}>quitar</button>
    </header>
  );
};

export default Navbar;
