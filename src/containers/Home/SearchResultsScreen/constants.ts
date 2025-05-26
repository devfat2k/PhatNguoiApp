export type Violation = {
  name: string;
  date: string;
  location: string;
  crime: string;
  status: 'Đã nộp phạt' | 'Chưa nộp phạt';
  decisionNumber: string;
  fine: number;
  enforcementUnit: string;
  handlingUnit: string;
  evidence: string;
};

export const mockDataViolation: Violation[] = [
  {
    name: 'Vi phạm 1',
    date: '30/12/2024',
    location: 'Ngã tư Nguyễn Trãi - Khuất Duy Tiến',
    crime: 'Không chấp hành tín hiệu đèn giao thông',
    status: 'Đã nộp phạt',
    decisionNumber: '123/QD-XPCPHC',
    fine: 700000,
    enforcementUnit: 'Phòng CSGT - Công an TP Hà Nội',
    handlingUnit: 'Phòng CSGT - Công an TP Hà Nội',
    evidence: 'Xem hình ảnh/video Vi phạm',
  },
  {
    name: 'Vi phạm 2',
    date: '01/01/2025',
    location: 'Ngã tư Láng Hạ - Huỳnh Thúc Kháng',
    crime: 'Vượt đèn đỏ',
    status: 'Chưa nộp phạt',
    decisionNumber: '124/QD-XPCPHC',
    fine: 800000,
    enforcementUnit: 'Phòng CSGT - Công an TP Hà Nội',
    handlingUnit: 'Phòng CSGT - Công an TP Hà Nội',
    evidence: 'Xem hình ảnh/video Vi phạm',
  },
  {
    name: 'Vi phạm 3',
    date: '02/01/2025',
    location: 'Ngã tư Giảng Võ - Liễu Giai',
    crime: 'Đi sai làn đường',
    status: 'Đã nộp phạt',
    decisionNumber: '125/QD-XPCPHC',
    fine: 600000,
    enforcementUnit: 'Phòng CSGT - Công an TP Hà Nội',
    handlingUnit: 'Phòng CSGT - Công an TP Hà Nội',
    evidence: 'Xem hình ảnh/video Vi phạm',
  },
  {
    name: 'Vi phạm 4',
    date: '03/01/2025',
    location: 'Ngã tư Hoàng Cầu - Thái Hà',
    crime: 'Không đội mũ bảo hiểm',
    status: 'Chưa nộp phạt',
    decisionNumber: '126/QD-XPCPHC',
    fine: 500000,
    enforcementUnit: 'Phòng CSGT - Công an TP Hà Nội',
    handlingUnit: 'Phòng CSGT - Công an TP Hà Nội',
    evidence: 'Xem hình ảnh/video Vi phạm',
  },
  {
    name: 'Vi phạm 4',
    date: '03/01/2025',
    location: 'Ngã tư Hoàng Cầu - Thái Hà',
    crime: 'Không đội mũ bảo hiểm',
    status: 'Chưa nộp phạt',
    decisionNumber: '126/QD-XPCPHC',
    fine: 500000,
    enforcementUnit: 'Phòng CSGT - Công an TP Hà Nội',
    handlingUnit: 'Phòng CSGT - Công an TP Hà Nội',
    evidence: 'Xem hình ảnh/video Vi phạm',
  },
];
