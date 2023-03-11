import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../constants';
import { authService } from '../../services/auth';
import { LoginParams, User } from '../../types/user';

type AuthState = {
  token: string | null;
  isLoading: boolean;
  user: User | null;
};

const initialState: AuthState = {
  token: null,
  isLoading: false,
  user: null,
};

export const signIn = createAsyncThunk('auth/signIn', async (data: LoginParams, thunkAPI) => {
  try {
    const response = await authService.signIn(data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const message = (error.response && error.response.data) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const signUp = createAsyncThunk('auth/signUp', async (data: LoginParams, thunkAPI) => {
  try {
    const response = await authService.signIn(data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const message = (error.response && error.response.data) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const logOut = createAsyncThunk('auth/logout', () => {
  authService.logOut();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload?.jwt) {
          state.token = action.payload?.jwt;
        }
        if (action.payload?.user) {
          state.user = action.payload?.user;
        }
      })
      .addCase(signIn.rejected, (state, action) => {
        state.token = null;
      })

      .addCase(signUp.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.token = null;
      });
  },
});
