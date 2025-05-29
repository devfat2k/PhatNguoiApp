import { apiBase } from '@src/api';
import { Api, StorageKey } from '@src/constants';
import { StorageService } from '@src/common';
import { LoginRequest } from '@src/types/authen';
interface AuthResponse {
  data: any;
}

async function loginWithSocial(data: any | LoginRequest, provider: string) {
  try {
    const response: AuthResponse = await apiBase('POST', `${Api.SOCIAL_AUTHEN_API}`, {
      provider: provider,
      ...data,
    });

    if (response?.data?.accessToken && response?.data?.refreshToken) {
      const { accessToken, refreshToken } = response.data;
      await StorageService.multiSet([
        { key: StorageKey.TOKEN, value: accessToken },
        { key: StorageKey.REFRESH_TOKEN, value: refreshToken },
      ]);
      console.log('Login social successful');
    }
    return response;
  } catch (error) {
    console.log('Login social failed:', error);
    throw error;
  }
}

async function loginWithFbIos(info: LoginRequest) {
  try {
    const response: AuthResponse = await apiBase('POST', `${Api.SOCIAL_AUTHEN_API_FB}`, info);
    if (response?.data?.accessToken && response?.data?.refreshToken) {
      const { accessToken, refreshToken } = response.data;
      await StorageService.multiSet([
        { key: StorageKey.TOKEN, value: accessToken },
        { key: StorageKey.REFRESH_TOKEN, value: refreshToken },
      ]);
    }
    return response;
  } catch (error) {
    console.log('Login social failed:', error);
    throw error;
  }
}

export { loginWithSocial, loginWithFbIos };
