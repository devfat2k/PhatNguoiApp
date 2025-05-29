import React, { useContext } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
// import {
//   AuthenticationToken,
//   GraphRequest,
//   GraphRequestManager,
//   LoginManager,
//   Settings,
// } from 'react-native-fbsdk-next';
// import Config from 'react-native-config';
// import { GlobalContext } from '@src/context';
// import { useAuth } from '@src/hooks/useAuth';
import { FBIcon } from '@src/utils/icon';
import { Colors } from '@src/utils';
import { scaleWidth, scaleHeight } from '@src/utils/styles/mixins';
import { Radius } from '@src/utils/styles/spacing';
import { GlobalContext } from '@src/context';

// Settings.initializeSDK();
// Settings.setAppID('721082420592700');

const FacebookButton = () => {
  // const { login } = useAuth();
  const { showMessage } = useContext(GlobalContext);
  // const responseInfoCallback = (error: any, result: any) => {
  //   if (error) {
  //     console.log('Error fetching data: ' + error.toString());
  //   } else {
  //     console.log('Success fetching data: =>>>>>' + JSON.stringify(result, null, 4));
  //     login('facebook', {
  //       id: result.id,
  //       name: result.name,
  //       image: result.picture?.data?.url ? result.picture.data.url : '',
  //       email: result?.email ? result.email : '',
  //     } as any);
  //   }
  // };

  // const requestAuthenFB = async () => {
  //   try {
  //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email'], 'limited', 'my_nonce');
  //     console.log('result fb =>>>>>>>>>>>', result);
  //     if (Platform.OS === 'ios') {
  //       const result = await AuthenticationToken.getAuthenticationTokenIOS();
  //       console.log('requestAuthenFB', result?.authenticationToken);
  //       const infoRequest = new GraphRequest('/me', {}, responseInfoCallback);
  //       new GraphRequestManager().addRequest(infoRequest).start();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     showMessage({
  //       type: 'error',
  //       text: 'There was a problem, please try again',
  //     });
  //   }
  // };

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
        showMessage({
          type: 'success',
          text: 'Tính năng đang phát triển. Vui lòng thử lại sau',
        });
      }}
    >
      <FBIcon />
    </TouchableOpacity>
  );
};

export default FacebookButton;
