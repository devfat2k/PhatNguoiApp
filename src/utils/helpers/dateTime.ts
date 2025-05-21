import dayjs from 'dayjs';

export const FORMAT_DATE_DEFAULT = 'HH:mm MMM DD, YYYY';
export function getCurrentWeek(): Date[] {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - (today.getDay() === 0 ? 6 : today.getDay() - 1));
  const week = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    week.push(date);
  }
  return week;
}

export function getDaysInMonth(date: Date): Date[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  const days: Date[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let i = 1; i <= daysInMonth; i++) {
    const currentDay = new Date(year, month, i, 12, 0, 0);
    days.push(currentDay);
  }

  return days;
}
export function getWeekStartIndex(days: Date[], today: Date, selectedDate: Date): number {
  const todayInMonth =
    today.getMonth() === selectedDate.getMonth() && today.getFullYear() === selectedDate.getFullYear();

  if (!todayInMonth) {
    return 0;
  }
  const todayIndex = days.findIndex(day => day.getDate() === today.getDate());
  const todayDayOfWeek = today.getDay();
  const weekStartIndex = todayIndex - todayDayOfWeek;
  return Math.max(0, weekStartIndex);
}

export const formatDate = (date?: string, format?: string) => {
  return dayjs(date ?? '').format(format ?? FORMAT_DATE_DEFAULT) ?? dayjs().format(format ?? FORMAT_DATE_DEFAULT);
};
