import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../constants';
import { AllBooksSuccess, GetAllBooksRequest } from '../../types/books';

interface BooksState {
  books: AllBooksSuccess | [];
  filteredBooks: AllBooksSuccess | [];
  booksStatus: 'loading' | 'idle' | 'faild';
  activeCategory: string;
  activeName: string;
}

const initialState: BooksState = {
  books: [],
  filteredBooks: [],
  booksStatus: 'idle',
  activeCategory: 'all',
  activeName: '',
};

export const fetchAllBooks = createAsyncThunk(
  'books/fetchAllBooks',
  async (obj, { dispatch, getState }) => {
    const response = await axios.get<AllBooksSuccess>(`${HOST}/api/books`);
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
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setActiveName(state, action) {
      state.activeName = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllBooks.pending, (state) => {
        state.booksStatus = 'loading';
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.booksStatus = 'idle';
        const actionsBooks = action.payload as AllBooksSuccess;
        state.books = actionsBooks;

        state.books = actionsBooks;

        state.filteredBooks = actionsBooks.filter((item, index) => item.categories.includes(state.activeName));
      })
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.booksStatus = 'faild';
      });
  },
});

export const AllBooksReducer = allBooksSlice.reducer;
