import React from 'react';
import Image from 'next/image';

const Badge = ({ text, icon }) => (
  <div className="bg-natural-4 dark:bg-black-3 px-2 py-1 text-xs rounded text-natural-1 font-medium flex gap-2 items-center">
    {icon && (
      <Image
        src={icon}
        alt="Icon"
        className="transition duration-300 grayscale"
        width={18}
        height={18}
      />
    )}
    {text}
  </div>
);

export default Badge;
