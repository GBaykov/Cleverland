import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { HOST } from '../../constants';
import { authHeader } from '../../services/auth/auth-header';
import { ChosenBookSuccess } from '../../types/books';
import { axiosInstance } from '../api';

type CurrenBookState = {
  bookId: number | null;
  currentBook: ChosenBookSuccess | null;
  currentBookStatus: 'loading' | 'idle' | 'faild';
};

const initialState: CurrenBookState = {
  bookId: null,
  currentBook: null,
  currentBookStatus: 'idle',
};

export const fetchOneBook = createAsyncThunk(
  'books/fetchOneBook',
  async (bookId: CurrenBookState['bookId'], thunkAPI) => {
    try {
      const response = await axiosInstance.get<ChosenBookSuccess>(`${HOST}/api/books/${bookId}`, {
        headers: {
          Authorization: authHeader(),
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const message = (error.response && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
      return error;
    }
  }
);

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBookId(state, action: PayloadAction<number>) {
      state.bookId = action.payload;
    },
    cleanBookError(state) {
      state.currentBookStatus = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOneBook.pending, (state) => {
        state.currentBookStatus = 'loading';
      })
      .addCase(fetchOneBook.fulfilled, (state, action) => {
        state.currentBookStatus = 'idle';
        state.currentBook = action.payload as ChosenBookSuccess;
      })
      .addCase(fetchOneBook.rejected, (state, action) => {
        state.currentBookStatus = 'faild';
      });
  },
});

export const BookReducer = bookSlice.reducer;
