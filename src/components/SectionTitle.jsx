import React from 'react';
import { useRouter } from 'next/router';

const SectionTitle = ({ title = '', button, targetPage }) => {
  const router = useRouter();

  const specialClass = title === '' && 'ml-0 justify-start';
  const hideH4 = title === '' && 'hidden';

  const handleClick = () => {
    if (button === 'Back' || button === 'See All') {
      router.push(targetPage);
    }
  };

  return (
    <div className="flex justify-between w-full align-end">
      <h4 className={`text-lg align-baseline ${hideH4}`}>{title}</h4>
      <button type="button" onClick={handleClick} className="text-base border rounded px-2 py-1 text-natural-1 dark:border-natural-1 font-bold">{button}</button>
    </div>
  );
};

export default SectionTitle;
