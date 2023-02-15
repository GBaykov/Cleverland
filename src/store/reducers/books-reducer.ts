import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../constants';
import { AllBooksSuccess, GetAllBooksRequest } from '../../types/books';

interface BooksState {
  books: AllBooksSuccess | [];
  status: 'loading' | 'idle' | 'faild';
}

const initialState: BooksState = {
  books: [],
  status: 'idle',
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
      const fetchStatus = state.status;

      if (fetchStatus === 'idle' || fetchStatus === 'loading') {
        // Already fetched or in progress, don't need to re-fetch
        return false;
      }
      return undefined;
    },
  }
);

export const allBooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBookId(state, action: PayloadAction<AllBooksSuccess>) {
      state.books = action.payload;
    },
  },
  extraReducers: {
    [fetchAllBooks.pending.toString()]: (state, action) => {
      state.status = 'loading';
    },
    [fetchAllBooks.fulfilled.toString()]: (state, action) => {
      state.status = 'idle';
      state.books = action.payload;
    },
    [fetchAllBooks.rejected.toString()]: (state, action) => {
      state.status = 'faild';
    },
  },
});

export const AllBooksReducer = allBooksSlice.reducer;
