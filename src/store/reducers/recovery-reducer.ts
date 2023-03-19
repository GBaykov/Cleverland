import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { HOST } from '../../constants';
import { authService } from '../../services/auth';
import { ErrorMessages } from '../../types/messages';
import { ResponseError } from '../../types/others';
import { ForgotPassword, ResetPassword } from '../../types/user';

type RecoveryState = {
  isLoading: boolean;
  isForgotSuccess: boolean;
  isResetSuccess: boolean;
  error: any;
  isSuccess: boolean;
};

const initialState: RecoveryState = {
  isLoading: false,
  isForgotSuccess: false,
  isResetSuccess: false,
  error: null,
  isSuccess: false,
};
type ForgotResponse = {
  ok: boolean;
};

export const getForgotPassword = createAsyncThunk('auth/forgot-password', async (data: ForgotPassword, thunkAPI) => {
  try {
    const response = await axios.post<ForgotResponse>(`${HOST}/api/auth/forgot-password`, data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const message = (error.response && error.response.data) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
    return error;
  }
});

export const getResetPassword = createAsyncThunk('auth/reset-password', async (data: ResetPassword, thunkAPI) => {
  try {
    const response = await axios.post(`${HOST}/api/auth/reset-password`, data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const message = (error.response && error.response.data) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
    return error;
  }
});

export const recoverySlice = createSlice({
  name: 'recovery',
  initialState,
  reducers: {
    clearData: (state) => {
      state.error = null;
      state.isSuccess = false;
      state.isForgotSuccess = false;
      state.isResetSuccess = false;
      state.isLoading = false;
    },
  },
  extraReducers(builder) {
    builder

      .addCase(getForgotPassword.pending, (state, action) => {
        state.error = null;
        state.isForgotSuccess = false;
        state.isResetSuccess = false;
        state.isLoading = true;
      })
      .addCase(getForgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isResetSuccess = false;
        state.isForgotSuccess = true;
      })
      .addCase(getForgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'error';
        // state.error = ErrorMessages.smthError;
      })

      .addCase(getResetPassword.pending, (state, action) => {
        state.error = null;
        state.isForgotSuccess = false;
        state.isResetSuccess = false;
        state.isLoading = true;
      })
      .addCase(getResetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isForgotSuccess = false;
        state.isResetSuccess = true;
      })
      .addCase(getResetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        // state.error = ErrorMessages.smthError;
      });
  },
});
export const RecoveryReducer = recoverySlice.reducer;
