import { navigate } from '@src/navigation/RootNavigation';
import { NotiIcon, ProtectIcon } from '@src/utils/icon';

export const OptionsSetting = [
  // {
  //   id: '1',
  //   label: 'Chỉnh sửa tên người dùng',
  //   icon: <UserIcon />,
  // },
  {
    id: '2',
    label: 'Thiết lập thông báo vi phạm',
    icon: <NotiIcon />,
    onPress: () => navigate('ConfigNotificationScreen'),
  },
  {
    id: '3',
    label: 'Chính sách bảo mật',
    icon: <ProtectIcon />,
    onPress: () => navigate('PrivacyScreen'),
  },
  // {
  //   id: '4',
  //   label: 'Ngôn ngữ',
  //   icon: <LangIcon />,
  // },
];
