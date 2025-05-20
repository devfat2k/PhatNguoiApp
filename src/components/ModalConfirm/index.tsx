import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@src/utils';
import { Gap, Radius, Size } from '@src/utils/styles/spacing';
import { TypographyStyle } from '@src/utils/styles/typography';
import { scaleSize } from '@src/utils/styles/mixins';
import ModalAlert from '../ModalAlert';

interface MyModalConfirmProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  title: string;
  content: string;
  icon: any;
  confirmText?: string;
  onPressConfirm: () => void;
}
const MyModalConfirm: FC<MyModalConfirmProps> = ({
  isVisible,
  setIsVisible,
  onPressConfirm,
  title,
  content,
  icon,
  confirmText = 'Delete',
}) => {
  return (
    <ModalAlert isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
      <View style={{ padding: scaleSize(24) }}>
        <View style={styles.row}>{icon && icon}</View>
        <Text style={styles.textLogOut}>{title}</Text>
        <Text style={styles.textContent}>{content}</Text>
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.btnCancel} onPress={() => setIsVisible(false)}>
            <Text style={styles.textCancel}>{'Cancel'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLogout} onPress={onPressConfirm}>
            <Text style={styles.textLogout}>{confirmText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalAlert>
  );
};

const styles = StyleSheet.create({
  textLogOut: {
    color: Colors.Neutral_900,
    textAlign: 'center',
    ...TypographyStyle.HEADING_H4,
  },
  textContent: {
    color: Colors.Neutral_500,
    textAlign: 'center',
    ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR,
  },
  btnCancel: {
    flex: 1,
    height: Size._4XLARGE,
    borderRadius: Radius._XLARGE,
    backgroundColor: Colors.Neutral_100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogout: {
    flex: 1,
    height: Size._4XLARGE,
    borderRadius: Radius._XLARGE,
    backgroundColor: Colors.Primary_500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCancel: {
    color: Colors.Neutral_500,
    ...TypographyStyle.BODY_MEDIUM_TIGHT_REGULAR,
  },
  textLogout: {
    color: Colors.Neutral_0,
    ...TypographyStyle.BODY_MEDIUM_TIGHT_REGULAR,
  },
  containerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap._XLARGE,
    marginTop: Size._SMALL,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scaleSize(8),
  },
});

export default MyModalConfirm;
