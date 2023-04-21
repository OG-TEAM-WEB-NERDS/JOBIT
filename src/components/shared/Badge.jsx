import React from 'react';

const Badge = ({ text, type = 'feature' }) => (
  <span
    className={`bg-natural-4 dark:bg-black-3 ${
      type === 'skill' && 'last:mr-0 '
    }  first:ml-0  ${
      type === 'skill' ? 'mx-1' : 'mx-2'
    } p-2 text-xxxs rounded-md`}
  >
    <span className="dark:text-natural-1 text-natural-2">{text}</span>
  </span>
);

export default Badge;
