// src/store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string | null;
  uid: string | null;
  loggedIn: boolean;
  loading: boolean; // Loading state
  error: string | null; // Error message
}

const initialState: UserState = {
  email: null,
  uid: null,
  loggedIn: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ email: string; uid: string }>) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.loggedIn = true;
    },
    clearUser: (state) => {
      state.email = null;
      state.uid = null;
      state.loggedIn = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setError, setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
