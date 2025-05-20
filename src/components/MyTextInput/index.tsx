import React, { FC, useRef } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Colors } from '@utils';
import { styles } from './styles';
import { WarningIcon } from '@src/utils/icon';

interface MyTextInputProps extends TextInputProps {
  editable?: boolean;
  label: string;
  containerStyle?: ViewStyle;
  icon?: any;
  error?: boolean;
  errorText?: string;
  actionInput?: boolean;
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
  ...args
}) => {
  const textInputRef = useRef<TextInput>(null); // Tạo ref cho TextInput

  // Hàm để ẩn bàn phím
  // const dismissKeyboard = () => {
  //   Keyboard.dismiss();
  //   if (textInputRef.current) {
  //     textInputRef.current?.blur(); // Mất focus khỏi TextInput
  //   }
  // };
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.textTitle}>{label && label}</Text>
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
