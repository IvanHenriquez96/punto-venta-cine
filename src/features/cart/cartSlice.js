import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../../Controllers/MoviesController";

const initialState = {
  tickets: [],
  precio_total: 0,
  cantidad_tickets: 0,
};

//carga la estructura del carrito en su estado inicial
movies.forEach((movie) => {
  let horario = movie.horarios.map((horario) => {
    return {
      horario: horario.horario,
      asientos_seleccionados: [],
    };
  });
  let pelicula = {
    id: movie.id,
    nombre: movie.nombre,
    precio: movie.precio,
    sala: movie.sala,
    horarios: horario,
  };

  //estructura hecha, se agrega al array tickets de InitialState
  initialState.tickets.push(pelicula);
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    agregar_al_carrito: (state, action) => {
      // console.log("action agregar_al_carrito con el payload:", action.payload);

      let pelicula = state.tickets.find((t) => t.id === action.payload.id_pelicula);
      let horario = pelicula.horarios.find((h) => h.horario == action.payload.horario);

      horario.asientos_seleccionados.push(action.payload.asiento);

      state.precio_total += action.payload.precio;
      state.cantidad_tickets += 1;
    },
    quitar_del_carrito: (state, action) => {
      // console.log("action quitar del_carrito con el payload:", action.payload);

      let pelicula = state.tickets.find((t) => t.id === action.payload.id_pelicula);
      let horario = pelicula.horarios.find((h) => h.horario == action.payload.horario);

      // console.log(horario);
      let asientos_actualizados = horario.asientos_seleccionados.filter((asiento) => {
        return asiento != action.payload.asiento;
      });

      horario.asientos_seleccionados = asientos_actualizados;

      state.precio_total -= action.payload.precio;
      state.cantidad_tickets -= 1;
    },
  },
});

export const { agregar_al_carrito, quitar_del_carrito } = cartSlice.actions;

export default cartSlice.reducer;
