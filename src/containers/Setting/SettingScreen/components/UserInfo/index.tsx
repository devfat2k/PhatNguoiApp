import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MyImage } from '@src/components';
import { Colors } from '@src/utils';
import { PremiumIcon } from '@src/utils/icon';
import { scaleHeight, scaleWidth } from '@src/utils/styles/mixins';
import { Gap, Radius } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';
import { IMAGES } from '@src/assets/images';

interface UserInfoProps {
  isGuest?: boolean;
}
const UserInfo: FC<UserInfoProps> = ({ isGuest }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: Gap._MEDIUM }}>
        <MyImage source={{ uri: isGuest ? IMAGES.GUEST : '' }} style={styles.avatar} />
        {isGuest ? (
          <Text style={styles.textEmail}>Guest</Text>
        ) : (
          <View>
            <Text style={styles.textName}>Username123</Text>
            <Text style={styles.textEmail}>example@gmail.com</Text>
          </View>
        )}
      </View>
      <TouchableOpacity onPress={() => {}}>
        <PremiumIcon />
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: scaleWidth(40),
    height: scaleHeight(40),
    borderRadius: Radius.FULL,
  },
  textName: {
    color: Colors.Neutral_900,
    ...TypographyStyle.BODY_REGULAR_NORMAL_MEDIUM,
  },
  textEmail: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
});

export default UserInfo;
