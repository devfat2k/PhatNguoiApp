import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { UserType } from '@src/types/profile';
interface ProfileState {
  user: UserType | null;
  isActivePinCode: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  user: null,
  isActivePinCode: false,
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { logout, setUserInfo } = profileSlice.actions;
const profileSlicePersistConfig = {
  key: 'profile',
  storage: AsyncStorage,
  whitelist: ['user'],
};
export default persistReducer(profileSlicePersistConfig, profileSlice.reducer);
