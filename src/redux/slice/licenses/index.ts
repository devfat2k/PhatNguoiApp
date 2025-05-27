import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LicensesType } from '@src/types/licenses';
interface LicensesAppState {
  dataLicenses: LicensesType;
}

const initialState: LicensesAppState = {
  dataLicenses: {
    licensePlate: '',
    violations: [],
  },
};

const licensesSlice = createSlice({
  name: 'licenses',
  initialState,
  reducers: {
    setDataLicenses: (state, action: PayloadAction<LicensesType>) => {
      state.dataLicenses = action.payload;
    },
  },
});
export const { setDataLicenses } = licensesSlice.actions;
export default licensesSlice.reducer;
