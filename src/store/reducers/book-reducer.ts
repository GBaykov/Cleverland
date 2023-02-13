import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICurrenBook {
  bookId: number | null;
}

const initialState: ICurrenBook = {
  bookId: null,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBookId(state, action: PayloadAction<number>) {
      state.bookId = action.payload;
    },
  },
});

export const BookReducer = bookSlice.reducer;
