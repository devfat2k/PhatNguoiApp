import React, { FC, useRef } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Colors } from '@utils';
import { styles } from './styles';
import { WarningIcon } from '@src/utils/icon';
import { TypographyStyle } from '@src/utils/styles/typography';
import { Gap } from '@src/utils/styles/spacing';

interface MyTextInputProps extends TextInputProps {
  editable?: boolean;
  label: string;
  containerStyle?: ViewStyle;
  icon?: any;
  error?: boolean;
  errorText?: string;
  actionInput?: boolean;
  isRequired?: boolean;
  onPressAction?: () => void;
}
const MyTextInput: FC<MyTextInputProps> = ({
  editable = true,
  label,
  containerStyle,
  icon,
  error,
  errorText,
  actionInput,
  onPressAction,
  isRequired = false,
  ...args
}) => {
  const textInputRef = useRef<TextInput>(null);
  // Hàm để ẩn bàn phím
  // const dismissKeyboard = () => {
  //   Keyboard.dismiss();
  //   if (textInputRef.current) {
  //     textInputRef.current?.blur();
  //   }
  // };
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{ flexDirection: 'row', gap: Gap._XSMALL }}>
        <Text style={styles.textTitle}>{label && label}</Text>
        {isRequired && (
          <Text
            style={{
              color: '#DC1F18',
              ...TypographyStyle.BODY_REGULAR_TIGHT_REGULAR,
            }}
          >
            *
          </Text>
        )}
      </View>
      <View
        style={[
          styles.containerInput,
          { opacity: editable ? 1 : 0.5 },
          {
            borderColor: error ? '#F04438' : Colors.Neutral_200,
          },
        ]}
      >
        <TextInput
          ref={textInputRef}
          editable={editable}
          style={styles.input}
          placeholderTextColor={Colors.Neutral_400}
          clearButtonMode="unless-editing"
          {...args}
        />
        {actionInput && <TouchableOpacity onPress={onPressAction}>{icon && icon}</TouchableOpacity>}
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <WarningIcon />
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

export default MyTextInput;
