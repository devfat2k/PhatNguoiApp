import { apiBase } from '@src/api';
import { Api } from '@src/constants';
import { setUserInfo } from '@src/redux/slice/profileSlice';
import { AppDispatch } from '@src/redux/store';
import { statusCode } from '@src/types/api';
import { UserType } from '@src/types/profile';

export const getUserInfo = () => async (dispatch: AppDispatch) => {
  try {
    const response: any = await apiBase<UserType>('GET', `${Api.USER_PROFILE}`);
    if (response.statusCode === statusCode.SUCCESS) {
      dispatch(setUserInfo(response?.data));
    }
    return response;
  } catch (error: any) {
    console.log('getUserInfo_ERR', error);
    throw error?.response?.data;
  }
};
