import { apiBase } from '@src/api';
import { Api } from '@src/constants';

export const searchLicenses = (licensePlate: string, type: string) => async () => {
  try {
    const response: any = await apiBase('GET', `${Api.LICENSES}?licensePlate=${licensePlate}&type=${type}`);
    return response;
  } catch {
    console.log('error');
  }
};
