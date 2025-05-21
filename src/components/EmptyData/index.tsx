import React, { FC, JSX } from 'react';
import { Text, View } from 'react-native';
import { EmptyIcon } from '@src/utils/icon';
import { Gap } from '@src/utils/styles/spacing';
import ConditionalRenderer from '../ConditionRender';
import { Colors } from '@src/utils';
import { TypographyStyle } from '@src/utils/styles/typography';

interface MyEmptyDataProps {
  icon?: JSX.Element;
  text?: string;
}
const MyEmptyData: FC<MyEmptyDataProps> = ({ icon, text }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', gap: Gap._LARGE }}>
      <ConditionalRenderer condition={!!icon}>{icon}</ConditionalRenderer>
      <ConditionalRenderer condition={!icon}>
        <EmptyIcon />
      </ConditionalRenderer>
      <ConditionalRenderer condition={!!text}>
        <Text
          style={{ ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR, color: Colors.Neutral_500, textAlign: 'center' }}
        >
          {text}
        </Text>
      </ConditionalRenderer>
      <ConditionalRenderer condition={!text}>
        <Text style={{ ...TypographyStyle.BODY_REGULAR_NORMAL_REGULAR, color: Colors.Neutral_500 }}>
          Chưa có tra cứu nào!
        </Text>
      </ConditionalRenderer>
    </View>
  );
};

export default MyEmptyData;
