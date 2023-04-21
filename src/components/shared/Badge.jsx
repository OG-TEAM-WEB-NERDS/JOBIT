import React from 'react';

const Badge = ({ text, icon }) => (
  <div className="bg-natural-4 dark:bg-black-3 px-2 py-1 text-xs rounded text-natural-1 font-medium flex gap-2 items-center">
    {icon}{text}
  </div>
);

export default Badge;
