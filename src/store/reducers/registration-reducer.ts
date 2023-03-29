import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { HOST } from '../../constants';
import { authService } from '../../services/auth';
import { ErrorMessages } from '../../types/messages';
import { ResponseError } from '../../types/others';
import { LoginParams, RegistrationParams, SignUpInResponse, User } from '../../types/user';

type RegisterState = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string;
};

const initialState: RegisterState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: '',
};

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

export const registerSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    clearData: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.error = '';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signUp.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        const response = action.payload as ResponseError;

        if (response && response.error) {
          if (response.error.status === 400) {
            state.error = ErrorMessages.wrongLoginOrPassword;
          } else if (response.error.status === 500) {
            state.error = ErrorMessages.registrationFail;
          } else state.error = ErrorMessages.smthError;
        } else state.error = ErrorMessages.smthError;
      });
  },
});
export const RegisterReducer = registerSlice.reducer;
