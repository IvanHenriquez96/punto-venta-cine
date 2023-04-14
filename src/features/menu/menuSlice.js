import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  menu: false,
  popover: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    cerrar_menu: (state) => {
      state.menu = false;
    },
    toggle_menu: (state) => {
      state.menu = !state.menu;
    },
    cerrar_popover: (state) => {
      state.popover = false;
    },
    toggle_popover: (state) => {
      state.popover = !state.popover;
    },
  },
});

export const { cerrar_menu, toggle_menu, cerrar_popover, toggle_popover } =
  menuSlice.actions;

export default menuSlice.reducer;
