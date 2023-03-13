import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
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
  error: any;
};

const initialState: AuthState = {
  token: '',
  isLoading: false,
  user: null,
  isSuccess: false,
  isError: false,
  error: null,
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
    return error;
  }
});

export const signUp = createAsyncThunk('auth/signUp', async (data: RegistrationParams, thunkAPI) => {
  try {
    const response = await authService.signUp(data);
    return response;
  } catch (error: unknown) {
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
      state.error = null;
      state.isSuccess = false;
    },
    logOut: (state) => {
      state.token = '';
      authService.logOut();
      state.user = null;
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
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        const response = action.payload as SignUpInResponse;
        state.token = response.jwt;
        state.user = response.user;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.token = '';
        state.isError = true;
        state.isLoading = false;

        const errResponse = action.payload as ResponseError;
        console.log(errResponse?.error.status);
        if (errResponse?.error.status === 400) {
          state.error = ErrorMessages.wrongLoginOrPassword;
        } else state.error = ErrorMessages.smthError;
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
        console.log(action.payload);

        const errResponse = action.payload as ResponseError;
        console.log(errResponse?.error.status);
        if (errResponse?.error.status === 400) {
          state.error = ErrorMessages.notUnique;
        } else state.error = ErrorMessages.registrationFail;
      });
  },
});
export const AuthReducer = authSlice.reducer;
