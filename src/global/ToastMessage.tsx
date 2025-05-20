import { Colors, Mixins } from '@utils';
import React from 'react';
import { ColorValue, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { default as AntDesign } from 'react-native-vector-icons/AntDesign';
import { default as Feather } from 'react-native-vector-icons/Feather';
import { default as FontAwesome5 } from 'react-native-vector-icons/FontAwesome5';

interface BaseToastProps {
  bgColor: ColorValue;
  textColor: ColorValue;
  iconName: string;
  iconColor: string;
  text: string;
  hide: any;
  isCheckNetwork?: boolean;
  position?: string;
}
const MyBaseToast = (props: BaseToastProps) => {
  const { bgColor, iconName, text, hide, isCheckNetwork, textColor, position, iconColor } = props;
  return (
    <View
      style={{
        width: '94%',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: bgColor,
        paddingHorizontal: Mixins.scale(12),
        paddingVertical: 12,
        marginBottom: position === 'bottom' ? Mixins.scale(32) : 0,
      }}
    >
      {!isCheckNetwork && (
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: iconColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesome5 name={iconName} color={bgColor} size={10} />
        </View>
      )}
      {isCheckNetwork && <Feather name={iconName} color={Colors.NEUTRAL_PRIMARY} size={18} />}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 8,
        }}
      >
        <Text
          style={{
            color: textColor,
          }}
        >
          {text}
        </Text>
      </View>
      <TouchableOpacity hitSlop={8} activeOpacity={1} onPress={() => hide()}>
        {/* {!isCheckNetwork && <AntDesign name={'close'} color={textColor} size={16} />} */}
        {isCheckNetwork && <AntDesign name={'close'} color={Colors.NEUTRAL_LIGHTEST} size={16} />}
      </TouchableOpacity>
    </View>
  );
};

const toastConfig = {
  success: (props: any) => {
    if (props.isVisible) {
      return (
        <MyBaseToast
          {...props}
          hide={props.hide}
          bgColor={Colors}
          iconColor={'#12B76A'}
          iconName="check"
          text={props.props.text}
          textColor={Colors.Neutral_0}
          position="bottom"
        />
      );
    }
    return null;
  },
  error: (props: any) => {
    if (props.isVisible) {
      return (
        <MyBaseToast
          {...props}
          hide={props.hide}
          bgColor={Colors.SECONDARY_NEGATIVE}
          iconName="times"
          text={props.props.text}
          textColor={Colors.CONTENT_NEGATIVE}
          position="bottom"
        />
      );
    }
    return null;
  },
  warning: (props: any) => {
    if (props.isVisible) {
      return (
        <MyBaseToast
          {...props}
          hide={props.hide}
          bgColor={Colors.SECONDARY_WARNING}
          iconName="exclamation"
          text={props.props.text}
          textColor={Colors.YELLOW_VIVID_400}
          position="bottom"
        />
      );
    }
    return null;
  },
  info: (props: any) => {
    if (props.isVisible) {
      return (
        <MyBaseToast
          {...props}
          hide={props.hide}
          bgColor={Colors.SECONDARY_INFORMATIVE}
          iconName="info"
          text={props.props.text}
          textColor={Colors.Neutral_0}
        />
      );
    }
    return null;
  },
  default: (props: any) => {
    if (props.isVisible) {
      return (
        <MyBaseToast
          {...props}
          hide={props.hide}
          bgColor={Colors.NEUTRAL_PRIMARY}
          iconName="info"
          text={props.props.text}
          textColor={Colors.WHITE}
          position="bottom"
        />
      );
    }
    return null;
  },
  online: (props: any) => {
    if (props.isVisible) {
      return (
        <MyBaseToast
          {...props}
          hide={props.hide}
          bgColor={Colors.NEUTRAL_TETIARY}
          iconName="wifi"
          text={'Đã kết nối mạng internet.'}
          isCheckNetwork
          textColor={Colors.CONTENT_PRIMARY}
          position="bottom"
        />
      );
    }
    return null;
  },
  offline: (props: any) => {
    if (props.isVisible) {
      return (
        <MyBaseToast
          {...props}
          hide={props.hide}
          bgColor={Colors.NEUTRAL_TETIARY}
          iconName="wifi-off"
          text={'Bạn đang offline.'}
          isCheckNetwork
          textColor={Colors.CONTENT_PRIMARY}
        />
      );
    }
    return null;
  },
};

const ToastMessage = () => {
  //@ts-ignore
  return <Toast config={toastConfig} position="bottom" />;
};

export { ToastMessage };
