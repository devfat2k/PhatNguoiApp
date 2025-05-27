import { PremiumBlueIcon, PremiumIcon, PremiumYellowIcon } from '@src/utils/icon';

export const PackageOptions = [
  {
    id: '1',
    label: 'Gói tháng',
    note: '',
    price: '29.000đ',
    icon: <PremiumIcon />,
  },
  {
    id: '2',
    label: 'Gói 3 tháng',
    note: '',
    price: '69.000đ',
    icon: <PremiumBlueIcon />,
  },
  {
    id: '3',
    label: 'Gói trọn đời',
    note: 'Duy nhất một lần',
    price: '179.000đ',
    icon: <PremiumYellowIcon />,
  },
];

export const PromoPackage = [
  {
    title: 'Theo dõi nhiều biển số cùng lúc',
    content: 'Quản lý phương tiện cá nhân, gia đình hoặc công ty dễ dàng.',
  },
  {
    title: 'Thông báo nhanh ưu tiên',
    content: 'Nhận cảnh báo ngay lập tức khi có vi phạm – không bị trễ.',
  },
  {
    title: 'Không quảng cáo',
    content: 'Trải nghiệm mượt mà, không bị gián đoạn bởi quảng cáo.',
  },
  {
    title: 'Lưu lịch sử tra cứu không giới hạn thời gian',
    content: 'Lưu trữ không giới hạn thời gian, cho phép bạn xem lại mọi lịch sử tra cứu bất cứ lúc nào.',
  },
];
