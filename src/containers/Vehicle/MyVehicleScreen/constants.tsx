export type HistoryItem = {
  id: string;
  licensePlate: string; // Biển số xe
  violationCount: number; // Số lỗi vi phạm
  lookupTime: string; // Thời điểm tra cứu
};

// Mock data lịch sử tra cứu
export const DataMockHistory: HistoryItem[] = [
  {
    id: '1',
    licensePlate: '30A-123.45',
    violationCount: 2,
    lookupTime: '21/04/2025 09:00',
  },
  {
    id: '2',
    licensePlate: '51H-678.90',
    violationCount: 1,
    lookupTime: '20/04/2025 14:30',
  },
  {
    id: '3',
    licensePlate: '29B-456.78',
    violationCount: 0,
    lookupTime: '19/04/2025 08:15',
  },
  {
    id: '4',
    licensePlate: '36C-987.65',
    violationCount: 3,
    lookupTime: '18/04/2025 16:45',
  },
  {
    id: '5',
    licensePlate: '36C-987.65',
    violationCount: 3,
    lookupTime: '18/04/2025 16:45',
  },
  {
    id: '6',
    licensePlate: '36C-987.65',
    violationCount: 3,
    lookupTime: '18/04/2025 16:45',
  },
  {
    id: '8',
    licensePlate: '36C-987.65',
    violationCount: 3,
    lookupTime: '18/04/2025 16:45',
  },
  {
    id: '9',
    licensePlate: '36C-987.65',
    violationCount: 3,
    lookupTime: '18/04/2025 16:45',
  },
];
