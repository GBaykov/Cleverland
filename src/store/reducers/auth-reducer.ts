import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../constants';
import { authService } from '../../services/auth';
import { ErrorMessages } from '../../types/messages';
import { ResponseError } from '../../types/others';
import { LoginParams, RegistrationParams, SignUpInResponse, User } from '../../types/user';

type AuthState = {
  token: string;
  isLoading: boolean;
  user: User | null;
  isSuccess: boolean;
  isError: boolean;
  error: string;
};

const initialState: AuthState = {
  token: '',
  isLoading: false,
  user: null,
  isSuccess: false,
  isError: false,
  error: '',
};

export const signIn = createAsyncThunk('auth/signIn', async (data: LoginParams, thunkAPI) => {
  try {
    const response = await authService.signIn(data);
    return response;
  } catch (error) {
    const e = error as ResponseError;
    if (e.error.status === 400) {
      return ErrorMessages.wrongLoginOrPassword;
    }
    return ErrorMessages.smthError;
    // if (axios.isAxiosError(error) && error.response) {
    //   const message = (error.response && error.response.data) || error.message || error.toString();
    //   return thunkAPI.rejectWithValue(message);
    // }
  }
});

export const signUp = createAsyncThunk('auth/signUp', async (data: RegistrationParams, thunkAPI) => {
  try {
    const response = await authService.signUp(data);
    return response;
  } catch (error: unknown) {
    const e = error as ResponseError;
    if (e.error.status === 400) {
      return ErrorMessages.notUnique;
    }
    return ErrorMessages.registrationFail;

    // if (axios.isAxiosError(error) && error.response) {

    //   const message: string = (error.response && error.response.data) || error.message || error.toString();
    //   return thunkAPI.rejectWithValue(message);
    // }
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
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        const response = action.payload as SignUpInResponse;
        state.token = response.jwt;
        state.user = response.user;
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.token = '';
        state.isError = true;
        state.error = action.payload as string;
      })

      .addCase(signUp.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.payload as string;
      });
  },
});
export const AuthReducer = authSlice.reducer;
