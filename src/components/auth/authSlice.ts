import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export interface LoginData {
  userName: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  rePassword: string;
}

interface AuthState {
  loginState?: LoginData;
  registerState?: RegisterData;
}

const initialState: AuthState = {
  loginState: undefined,
  registerState: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginState: (state, action: PayloadAction<LoginData>) => {
      state.loginState = action.payload;
    },
    setRegisterState: (state, action: PayloadAction<RegisterData>) => {
      state.registerState = action.payload;
    },
    deleteLoginState: (state) => {
      state.loginState = undefined;
    },
    deleteRegisterState: (state) => {
      state.registerState = undefined;
    },
  },
});

export const {
  setLoginState,
  deleteLoginState,
  setRegisterState,
  deleteRegisterState,
} = authSlice.actions;

export const autState = (state: RootState) => state.auth as AuthState;

export default authSlice.reducer;
