import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { HOST } from '../../constants';
import { authService } from '../../services/auth';
import { ErrorMessages } from '../../types/messages';
import { ResponseError } from '../../types/others';
import { LoginParams, RegistrationParams, SignUpInResponse, User } from '../../types/user';
import { getFromStorage } from '../../utils/localstorage';

type AuthState = {
  token: string;
  user: User | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string;
};

function userFromStorage() {
  const storageUserData: string | null = getFromStorage('user');
  let user: User | null;
  if (typeof storageUserData === 'string') {
    user = JSON.parse(storageUserData);
  } else user = null;

  return user;
}

const initialState: AuthState = {
  token: getFromStorage('token') || '',
  isLoading: false,
  user: userFromStorage(),
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
          if (response.error.status === 400) {
            state.error = ErrorMessages.wrongLoginOrPassword;
          } else {
            state.error = ErrorMessages.smthError;
          }
        } else state.error = ErrorMessages.smthError;
      });
  },
});
export const AuthReducer = authSlice.reducer;
