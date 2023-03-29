import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { HOST } from '../../constants';
import { authService } from '../../services/auth';
import { ErrorMessages } from '../../types/messages';
import { ResponseError } from '../../types/others';
import { LoginParams, RegistrationParams, SignUpInResponse, User } from '../../types/user';

type AuthState = {
  token: string;
  user: User | null;
  isLoading: boolean;
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
    // const { response } = error as AxiosError;
    // if (response?.status === 400) {
    //   state.error = ErrorMessages.wrongLoginOrPassword;
    //     } else state.error = ErrorMessages.smthError;

    if (axios.isAxiosError(error) && error.response) {
      const message = (error.response && error.response.data) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
    return error;
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearData: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.error = '';
    },
    logOut: (state) => {
      state.token = '';
      authService.logOut();
      state.user = null;
      state.error = '';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.isError = false;
        state.error = '';
        state.isSuccess = false;
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.error = '';
        const response = action.payload as SignUpInResponse;
        state.token = response.jwt;
        state.user = response.user;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.token = '';
        state.isError = true;
        state.isLoading = false;
        const response = action.payload as ResponseError;
        if (response && response.error) {
          console.log(response);
          if (response.error.status === 400) {
            console.log(response.error.status);
            state.error = ErrorMessages.wrongLoginOrPassword;
          } else {
            state.error = ErrorMessages.smthError;
            console.log(response.error.status);
          }
        } else state.error = ErrorMessages.smthError;
      });
  },
});
export const AuthReducer = authSlice.reducer;
