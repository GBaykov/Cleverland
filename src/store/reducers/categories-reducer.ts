import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../constants';
import { authHeader } from '../../services/auth/auth-header';
import { Category, ICategories } from '../../types/categories';
import { axiosInstance } from '../api';

export interface CategoriesState {
  categories: Category[] | [];
  categoryStatus: 'loading' | 'idle' | 'faild';
}
export const initialState: CategoriesState = {
  categories: [],
  categoryStatus: 'idle',
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axiosInstance.get<ICategories>(`${HOST}/api/categories`, {
      headers: {
        Authorization: authHeader(),
      },
    });
    return response.data;
  },
  {
    condition: (obj, { getState }) => {
      const categories = getState() as CategoriesState;
      const fetchStatus = categories.categoryStatus;

      if (fetchStatus !== 'idle' && fetchStatus !== 'loading') {
        return true;
      }
      return false;
    },
    dispatchConditionRejection: true,
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    cleanategoryError(state) {
      state.categoryStatus = 'idle';
    },
  },
  extraReducers: {
    [fetchCategories.pending.toString()]: (state) => {
      state.categoryStatus = 'loading';
    },
    [fetchCategories.fulfilled.toString()]: (state, action) => {
      state.categoryStatus = 'idle';
      state.categories = action.payload;
    },
    [fetchCategories.rejected.toString()]: (state, action) => {
      state.categoryStatus = 'faild';
    },
  },
});

export const CategoriesReducer = categoriesSlice.reducer;
