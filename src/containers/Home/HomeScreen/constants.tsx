import { HondaEVIcon, HondaIcon, OtoIcon } from '@src/utils/icon';

export const TopTabOptions = [
  {
    id: '1',
    title: 'Tra cứu biển số ',
  },
  {
    id: '2',
    title: 'Lịch sử tra cứu',
  },
];

export const OptionVehicle = [
  {
    id: '1',
    label: 'Xe ô tô',
    icon: <OtoIcon />,
  },
  {
    id: '2',
    label: 'Xe máy',
    icon: <HondaIcon />,
  },
  {
    id: '3',
    label: 'Xe điện',
    icon: <HondaEVIcon />,
  },
];
