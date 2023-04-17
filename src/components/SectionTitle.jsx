import React from 'react';
import { useRouter } from 'next/router';

const SectionTitle = ({ title, button, targetPage }) => {
  const router = useRouter();

  let specialClass = '';
  let hideH4 = '';

  const handleClick = () => {
    if (button === 'Back' || button === 'See All') {
      router.push(targetPage);
    }
  };

  if (title === '') {
    specialClass = 'ml-0 justify-start';
    hideH4 = 'hidden';
  }

  return (
    <div className="flex justify-between w-full align-end">
      <h4 className={`text-lg align-baseline ${hideH4}`}>{title}</h4>
      <button onClick={handleClick} className={`text-base border rounded px-2 py-1 ${specialClass}`}>{button}</button>
    </div>
  );
};

export default SectionTitle;
