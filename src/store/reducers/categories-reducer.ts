import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../constants';
import { Category, ICategories } from '../../types/categories';

export interface CategoriesState {
  categories: Category[] | [];
  status: 'loading' | 'idle' | 'faild';
}
export const initialState: CategoriesState = {
  categories: [],
  status: 'idle',
};

export const fetchCategories = createAsyncThunk('categories/fetchAllBooks', async () => {
  const response = await axios.get<ICategories>(`${HOST}/api/categories`);
  return response.data;
});

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [fetchCategories.fulfilled.toString()]: (state, action) => {
      state.status = 'idle';
      state.categories = action.payload;
    },
    [fetchCategories.rejected.toString()]: (state, action) => {
      state.status = 'faild';
    },
  },
});

export const CategoriesReducer = categoriesSlice.reducer;
