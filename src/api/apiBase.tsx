import { StorageService } from '@src/common';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Api, StorageKey } from '../constants';
const API_BASE_URL = '';
const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Timeout 10s
  headers: {
    'Content-Type': 'application/json',
  },
});
const getToken = async () => {
  return await StorageService.getItem(StorageKey.TOKEN);
};
export const AuthEvents = {
  onTokenExpired: new Set<() => void>(),

  emitTokenExpired() {
    this.onTokenExpired.forEach(listener => listener());
  },

  addTokenExpiredListener(callback: () => void): () => void {
    this.onTokenExpired.add(callback);
    return () => {
      this.onTokenExpired.delete(callback);
    };
  },
};
async function refreshAccessToken(): Promise<string | null> {
  try {
    const { refreshToken, accessToken } = await StorageService.multiGet([
      StorageKey.REFRESH_TOKEN,
      StorageKey.TOKEN,
    ]).then(data => ({
      refreshToken: data.find(item => item.key === StorageKey.REFRESH_TOKEN)?.value || null,
      accessToken: data.find(item => item.key === StorageKey.TOKEN)?.value || null,
    }));
    if (!refreshToken || !accessToken) throw new Error('No refresh token available');
    const response = await axios.post(
      `${Api.REFRESH_AUTH}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
          'Content-Type': 'application/json',
        },
      },
    );

    const newToken = response.data.data.accessToken;
    const newRefreshToken = response.data.data.refreshToken;
    await StorageService.multiSet([
      { key: StorageKey.TOKEN, value: newToken },
      { key: StorageKey.REFRESH_TOKEN, value: newRefreshToken },
    ]);
    return newToken;
  } catch (error) {
    console.log('Error refreshing token: =>>>>>>', error);
    await StorageService.multiSet([
      { key: StorageKey.TOKEN, value: null },
      { key: StorageKey.REFRESH_TOKEN, value: null },
    ]);
    if (axios.isAxiosError(error) && error?.response?.status === 401) {
      AuthEvents.emitTokenExpired();
    }
    return null;
  }
}

apiInstance.interceptors.request.use(
  async config => {
    const token = await getToken();
    console.log('Token: =>>>>>>', token);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// apiInstance.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async error => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const newToken = await refreshAccessToken();
//       if (newToken) {
//         apiInstance.defaults.headers.common.Authorization = `Bearer ${newToken}`;
//         originalRequest.headers.Authorization = `Bearer ${newToken}`;
//         return apiInstance(originalRequest);
//       }
//     }
//     return Promise.reject(error);
//   },
// );
apiInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await refreshAccessToken();
      if (newToken) {
        apiInstance.defaults.headers.common.Authorization = `Bearer ${newToken}`;
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiInstance(originalRequest);
      } else {
        AuthEvents.emitTokenExpired();
      }
    }
    return Promise.reject(error);
  },
);
async function apiBase<T>(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  url: string,
  data?: object,
  config?: AxiosRequestConfig,
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiInstance({
      method,
      url,
      data,
      ...(config && config),
    });
    console.log(`API ${method} ${url} response:`, response.data);
    return response.data;
  } catch (error: any) {
    console.log(`API ${method} ${url} error:`, error.message);
    throw error;
  }
}

export { apiBase };
