export const NotiOptions = [
  { id: 1, type: 'Tất cả' },
  { id: 2, type: 'Chưa đọc' },
];

export type ViolationNotification = {
  dateTime: string;
  plateNumber: string;
};

export const ViolationNotificationMock: ViolationNotification[] = [
  {
    dateTime: '21/04/2025',
    plateNumber: '30A-123.45',
  },
  {
    dateTime: '22/04/2025 10:15',
    plateNumber: '51H-456.78',
  },
  {
    dateTime: '23/04/2025 14:30',
    plateNumber: '29D-789.12',
  },
  {
    dateTime: '23/04/2025 14:30',
    plateNumber: '29D-789.12',
  },
  {
    dateTime: '23/04/2025 14:30',
    plateNumber: '29D-789.12',
  },
  {
    dateTime: '23/04/2025 14:30',
    plateNumber: '29D-789.12',
  },
  {
    dateTime: '23/04/2025 14:30',
    plateNumber: '29D-789.12',
  },
  {
    dateTime: '23/04/2025 14:30',
    plateNumber: '29D-789.12',
  },
];
