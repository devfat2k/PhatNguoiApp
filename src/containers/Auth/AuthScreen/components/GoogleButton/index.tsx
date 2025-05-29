import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import { GoogleIcon } from '@src/utils/icon';
import { Colors } from '@src/utils';
import { scaleWidth, scaleHeight } from '@src/utils/styles/mixins';
import { Radius } from '@src/utils/styles/spacing';
import { useAuth } from '@src/hooks/useAuth';
import { GlobalContext } from '@src/context';

GoogleSignin.configure({
  webClientId: Config.WEB_CLIENT_ID_GOOGLE,
});

const GoogleButton = () => {
  const { login } = useAuth();
  const { showMessage } = useContext(GlobalContext);
  const verifyData = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo =>>>>', JSON.stringify(userInfo, null, 4));
      if (userInfo?.data?.idToken) {
        login('google', userInfo?.data?.idToken);
      } else {
        const { type } = userInfo;
        let mes = 'CANCELLED_LOGIN';
        if (type === 'cancelled') {
          mes = 'CANCELLED_LOGIN';
        }
        throw new Error(mes);
      }
    } catch (error: any) {
      console.log('error ', error);
      if (error?.message === 'CANCELLED_LOGIN') return;
      showMessage({
        type: 'error',
        text: 'There was a problem, please try again',
      });
    }
  };

  return (
    <TouchableOpacity
      style={{
        width: scaleWidth(101),
        height: scaleHeight(72),
        backgroundColor: Colors.Neutral_0,
        borderWidth: scaleWidth(1),
        borderRadius: Radius._XLARGE,
        borderColor: Colors.Neutral_200,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => {
        verifyData();
      }}
    >
      <GoogleIcon />
    </TouchableOpacity>
  );
};

export default GoogleButton;
