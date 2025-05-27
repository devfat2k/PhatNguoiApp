import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { mainStackParamList } from '../../../navigation/type';
import { MyHeader, MyWrapper } from '@components';
import { Colors } from '@src/utils';
import { styles } from './styles';
import { Switch } from 'react-native-gesture-handler';
import { Gap, Padding } from '@src/utils/styles/spacing';
import { ArrowDownIcon, ClockIcon, TickSquareIconIcon, UnTickIcon, UnTickSquareIcon } from '@src/utils/icon';
import { GlobalCenter } from '@src/utils/styles/typography';
import DatePicker from 'react-native-date-picker';
import { TimeGiveNoti } from './constants';
import { scaleHeight } from '@src/utils/styles/mixins';
interface ConfigNotificationScreenProps
  extends NativeStackScreenProps<mainStackParamList, 'ConfigNotificationScreen'> {}
const ConfigNotificationScreen: FC<ConfigNotificationScreenProps> = () => {
  const [timeGiveSelected, setTimeGiveSelected] = useState<any>();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [time, setTime] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <MyWrapper isSafe style={{ backgroundColor: Colors.Primary_500 }}>
      <MyHeader title="Thiết lập thông báo" goBack titleColor={Colors.Neutral_0} />
      <View style={styles.container}>
        <View style={styles.containerSwitch}>
          <Switch
            trackColor={{ false: '#12B76A', true: '#D0D5DD' }}
            thumbColor={'#fff'}
            ios_backgroundColor="#9EA8B3"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.textSwitch}>Bật thông báo khi có vi phạm</Text>
        </View>
        <View style={{ marginTop: Padding._3XLARGE, marginBottom: Padding._XLARGE }}>
          <Text style={styles.text1}>Tuỳ chọn thời gian nhận thông báo</Text>
          <View style={styles.containerGiveNoti}>
            <TouchableOpacity style={{ ...GlobalCenter.centerLeft, gap: Gap._LARGE, marginBottom: Padding._2XLARGE }}>
              <UnTickIcon />
              <Text style={styles.textGive}>Nhận thông báo trong khoảng thời gian</Text>
            </TouchableOpacity>
            <View style={{ ...GlobalCenter.centerBetween }}>
              <View style={{ flex: 1 }} />
              <View style={{ flex: 8 }}>
                <TouchableOpacity
                  style={styles.containerSelectedTime}
                  onPress={() => {
                    setOpen(true);
                  }}
                >
                  <View style={{ ...GlobalCenter.centerLeft, gap: Gap._MEDIUM }}>
                    <ClockIcon />
                    <Text style={{ color: Colors.Neutral_400 }}>Chọn thời gian bắt đầu</Text>
                  </View>
                  <ArrowDownIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.containerSelectedTime}
                  onPress={() => {
                    setOpen(true);
                  }}
                >
                  <View style={{ ...GlobalCenter.centerLeft, gap: Gap._MEDIUM }}>
                    <ClockIcon />
                    <Text style={{ color: Colors.Neutral_400 }}>Chọn thời gian kết thúc</Text>
                  </View>
                  <ArrowDownIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerGiveNoti}>
            <TouchableOpacity style={{ ...GlobalCenter.centerLeft, gap: Gap._LARGE, marginBottom: Padding._2XLARGE }}>
              <UnTickIcon />
              <Text style={styles.textGive}>Nhận thông báo theo buổi</Text>
            </TouchableOpacity>
            <View style={{ ...GlobalCenter.centerBetween }}>
              <View style={{ flex: 1 }} />
              <View style={{ flex: 50 }}>
                {TimeGiveNoti.map((item, index) => {
                  const isTick = item === timeGiveSelected;
                  return (
                    <TouchableOpacity
                      key={index}
                      style={{
                        ...GlobalCenter.centerLeft,
                        gap: Gap._MEDIUM,
                        height: scaleHeight(24),
                        marginBottom: scaleHeight(16),
                      }}
                      onPress={() => setTimeGiveSelected(item)}
                    >
                      {isTick ? <TickSquareIconIcon /> : <UnTickSquareIcon />}
                      <Text>{item.lable}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </View>
      <DatePicker
        modal
        open={open}
        date={time}
        onConfirm={date => {
          setTime(date);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        title="Time"
        confirmText="Save"
        mode="time"
      />
    </MyWrapper>
  );
};

export default ConfigNotificationScreen;
