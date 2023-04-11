import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cantidad_tickets: 0,
  precio_total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    agregar_al_carrito: (state, action) => {
      state.cantidad_tickets += 1;
      state.precio_total += action.payload;
    },
    quitar_del_carrito: (state, action) => {
      state.cantidad_tickets -= 1;
      state.precio_total -= action.payload;
    },
  },
});

export const { agregar_al_carrito, quitar_del_carrito } = cartSlice.actions;

export default cartSlice.reducer;
