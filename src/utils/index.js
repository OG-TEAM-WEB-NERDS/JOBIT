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

// function to calculate days left for job expiration
export const calculateDateToJobExpiration = (timestamp) => {
  const defaultTimestamp = 'Thu, 01 Jan 1970 00:00:00 GMT';
  const dateToday = new Date();
  const expiryDate = new Date(timestamp * 1000);

  if (expiryDate.toUTCString() === defaultTimestamp) {
    return 'Expiry not specified';
  }
  if (expiryDate < dateToday && expiryDate.toUTCString() !== defaultTimestamp) {
    return 'Job expired';
  }

  const diffTime = Math.abs(expiryDate - dateToday); // Difference in milliseconds
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days

  return diffDays;
};

// function to format salary range info depending on values available from the API response
export const getSalaryRangeInfo = (job) => {
  if (job.job_min_salary && job.job_max_salary && job.job_salary_currency) {
    return (
      <p className="font-bold text-lg">
        {job.job_min_salary &&
          job.job_max_salary &&
          job.job_salary_currency &&
          `${job.job_salary_currency} ${job.job_min_salary} - ${job.job_max_salary} `}
        <span className="font-medium text-natural-1">{`/ ${job.job_salary_period}`}</span>
      </p>
    );
  }
  if (job.job_min_salary && job.job_salary_currency && job.job_salary_period) {
    return (
      <p className="font-bold text-lg">
        {`From ${job.job_salary_currency} ${job.job_min_salary} ${(
          <span className="font-medium text-natural-1">{`/ ${job.job_salary_period}`}</span>
        )}`}
      </p>
    );
  }

  if (job.job_max_salary && job.job_salary_currency && job.job_salary_period) {
    return (
      <p className="font-bold text-lg">
        {`From ${job.job_salary_currency} ${job.job_max_salary} ${(
          <span className="font-medium text-natural-1">{`/ ${job.job_salary_period}`}</span>
        )}`}
      </p>
    );
  }
  return <p className="font-bold text-lg">Salary range not specified</p>;
};

// function to check if src is valid URL
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};
