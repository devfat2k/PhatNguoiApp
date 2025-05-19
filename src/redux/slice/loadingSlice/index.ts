import { createSlice } from '@reduxjs/toolkit';
interface LoadingAppState {
  isLoading: boolean;
}

const initialState: LoadingAppState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    hideLoading: (state: LoadingAppState) => {
      state.isLoading = false;
    },
    showLoading: (state: LoadingAppState) => {
      state.isLoading = true;
    },
  },
});
export const { hideLoading, showLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
