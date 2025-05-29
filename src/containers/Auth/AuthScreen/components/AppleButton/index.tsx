import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
// import { appleAuth } from '@invertase/react-native-apple-authentication';
// import { GlobalContext } from '@src/context';
// import { useAuth } from '@src/hooks/useAuth';
import { AppleIcon } from '@src/utils/icon';
import { Colors } from '@src/utils';
import { scaleWidth, scaleHeight } from '@src/utils/styles/mixins';
import { Radius } from '@src/utils/styles/spacing';
import { GlobalContext } from '@src/context';

const AppleButton = () => {
  const { showMessage } = useContext(GlobalContext);
  // const { login } = useAuth();

  // const onAppleButtonPress = async () => {
  //   try {
  //     const appleAuthRequestResponse = await appleAuth.performRequest({
  //       requestedOperation: appleAuth.Operation.LOGIN,
  //       requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
  //     });
  //     const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
  //     console.log('appleAuthRequestResponse.identityToken =>>', JSON.stringify(appleAuthRequestResponse, null, 4));
  //     if (credentialState === appleAuth.State.AUTHORIZED) {
  //       if (appleAuthRequestResponse.identityToken) {
  //         login('apple', appleAuthRequestResponse.identityToken);
  //       } else {
  //         throw new Error('Authorization code is null');
  //       }
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
      <AppleIcon />
    </TouchableOpacity>
  );
};

export default AppleButton;
