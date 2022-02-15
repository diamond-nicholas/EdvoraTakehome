export const formatDate = (text) => {
  const monthNames = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  const formatted = new Date(text);

  const formattedMonth = monthNames[formatted.getMonth()];
  const formattedDay = formatted.getDate();
  const formattedYear = formatted.getFullYear();

  return `${formattedDay}:${formattedMonth}:${formattedYear}`;
};
