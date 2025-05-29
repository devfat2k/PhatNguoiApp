import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import styles from './styles';
import { ArrowRightIcon, ProtectIcon } from '@src/utils/icon';
import { navigate } from '@src/navigation/RootNavigation';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
      nestedScrollEnabled
      style={{ flex: 1 }}
    >
      <View style={styles.drawer}>
        <TouchableOpacity
          style={styles.containerOptions}
          onPress={() => {
            navigate('PrivacyScreen');
          }}
        >
          <View style={styles.center}>
            <ProtectIcon />
            <Text style={styles.textLabel}>Chính sách bảo mật</Text>
          </View>
          <ArrowRightIcon />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
