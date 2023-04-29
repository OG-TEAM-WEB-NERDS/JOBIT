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

  const dayToday = today.getDay() || '1';
  const dayOfWeek = daysOfWeek[dayToday];
  const dayOfMonth = today.getDate();
  const monthOfYear = monthsOfYear[today.getMonth()];
  const year = today.getFullYear();
  return `${dayOfWeek}, ${dayOfMonth} ${monthOfYear} ${year}`;
};

export const calculateDateToJobExpiration = (timestamp) => {
  const dateToday = new Date();
  const expiryDate = new Date(timestamp * 1000);

  if (expiryDate < dateToday) {
    return "The future date cannot be earlier than today's date.";
  }

  const diffTime = Math.abs(expiryDate - dateToday); // Difference in milliseconds
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days

  return diffDays;
};
