import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMenu {
  isMenuOpen: boolean;
}

const initialState: IMenu = {
  isMenuOpen: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu(state, action: PayloadAction<boolean>) {
      state.isMenuOpen = action.payload;
    },
  },
});

export const MenuReducer = menuSlice.reducer;
