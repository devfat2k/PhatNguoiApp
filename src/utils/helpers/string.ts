export const checkStringIsNumber = (str: any) => {
  const regex = /[0-9]/g;
  return regex.test(str);
};

export const formatStringToMoney = (str: number | string): string => {
  const stringFormat = typeof str === 'string' ? parseInt(str, 10) : str;
  const result = stringFormat.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).slice(0, -3);
  return (isNaN(parseFloat(result)) ? '0 ' : result) + 'đ';
};
export const formatLicensePlate = (input: string) => {
  const trimmed = input?.trim();
  const cleaned = trimmed.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

  if (cleaned.length === 9) {
    const part1 = cleaned.slice(0, 4);
    const part2 = cleaned.slice(4, 7);
    const part3 = cleaned.slice(7, 9);
    if (/^\d+$/.test(part2) && /^\d+$/.test(part3)) {
      return `${part1}-${part2}.${part3}`;
    } else {
      return 'Biển số sai định dạng';
    }
  } else if (cleaned.length === 8) {
    const part1 = cleaned.slice(0, 3);
    const part2 = cleaned.slice(3, 6);
    const part3 = cleaned.slice(6, 8);
    if (/^\d+$/.test(part2) && /^\d+$/.test(part3)) {
      return `${part1}-${part2}.${part3}`;
    } else {
      return 'Biển số sai định dạng';
    }
  }
};
