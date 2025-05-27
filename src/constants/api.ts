import Config from 'react-native-config';

// export const base_url = 'https://chefly-api.onrender.com'
export const SOCIAL_AUTHEN_API = Config.HOST + '/api/auth/social/login';
export const SOCIAL_AUTHEN_API_FB = Config.HOST + '/api/auth/facebook-ios/login';
export const USER_PROFILE = Config.HOST + '/api/users/profile';
export const REFRESH_AUTH = Config.HOST + '/api/auth/refresh';
export const SUBSCRIBE_PURCHASE = Config.HOST + '/api/iap/subscribe';
export const GET_SUBSCRIBE_PURCHASE = Config.HOST + '/api/iap/start-trial';
export const GET_TRIAL_PURCHASE = Config.HOST + '/api/iap/subscription';
export const LICENSES = Config.HOST + '/api/licenses';
