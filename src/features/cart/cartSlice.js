import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cantidad_tickets: 0,
//   precio_total: 0,
// };

const initialState = {
  tickets: [],
  precio_total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    agregar_al_carrito: (state, action) => {
      console.log("action agregar_al_carrito con el payload:", action.payload);
      state.tickets.push(action.payload);
      state.precio_total += action.payload.precio;
    },
    quitar_del_carrito: (state, action) => {
      console.log("action quitar del_carrito con el payload:", action.payload);

      state.tickets = state.tickets.filter(
        (arrow) =>
          arrow.id_pelicula === action.payload.id_pelicula &&
          arrow.asiento !== action.payload.asiento
      );

      state.precio_total -= action.payload.precio;
    },
  },
});

export const { agregar_al_carrito, quitar_del_carrito } = cartSlice.actions;

export default cartSlice.reducer;
