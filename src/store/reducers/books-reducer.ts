import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../constants';
import { AllBooksSuccess, GetAllBooksRequest } from '../../types/books';

interface BooksState {
  books: AllBooksSuccess | [];
  booksStatus: 'loading' | 'idle' | 'faild';
}

const initialState: BooksState = {
  books: [],
  booksStatus: 'idle',
};

export const fetchAllBooks = createAsyncThunk(
  'books/fetchAllBooks',
  async (obj, { dispatch, getState }) => {
    const response = await axios.get<GetAllBooksRequest>(`${HOST}/api/books`);
    return response.data;
  },
  {
    condition: (obj, { getState, extra }) => {
      const state = getState() as BooksState;
      const fetchStatus = state.booksStatus;

      if (fetchStatus === 'idle' || fetchStatus === 'loading') {
        return false;
      }
      return undefined;
    },
    dispatchConditionRejection: true,
  }
);

export const allBooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBookId(state, action: PayloadAction<AllBooksSuccess>) {
      state.books = action.payload;
    },
    cleanBooksError(state) {
      state.booksStatus = 'idle';
    },
  },
  extraReducers: {
    [fetchAllBooks.pending.toString()]: (state) => {
      state.booksStatus = 'loading';
    },
    [fetchAllBooks.fulfilled.toString()]: (state, action) => {
      state.booksStatus = 'idle';
      state.books = action.payload;
    },
    [fetchAllBooks.rejected.toString()]: (state, action) => {
      state.booksStatus = 'faild';
    },
  },
});

export const AllBooksReducer = allBooksSlice.reducer;
