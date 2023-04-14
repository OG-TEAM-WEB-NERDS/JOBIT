export const getDate = () => {
  const today = new Date();
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayOfWeek = daysOfWeek[today.getDay()];
  const dayOfMonth = today.getDate();
  const monthOfYear = monthsOfYear[today.getMonth()];
  const year = today.getFullYear();
  return `${dayOfWeek}, ${dayOfMonth} ${monthOfYear} ${year}`;
};
