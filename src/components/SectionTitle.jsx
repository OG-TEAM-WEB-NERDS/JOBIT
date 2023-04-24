import React from 'react';
import { useRouter } from 'next/router';

import Button from './Button';

const SectionTitle = ({ title = '', buttonText, targetPage }) => {
  const router = useRouter();

  // const specialClass = title === '' && 'ml-0 justify-start';
  const hideH4 = title === '' && 'hidden';

  const handleClick = () => {
    if (buttonText === 'Back' || buttonText === 'See All') {
      router.push(targetPage);
    }
  };

  return (
    <div className="flex justify-between w-full align-end">
      <h2 className={`align-baseline ${hideH4}`}>{title}</h2>
      {/* <button type="button" onClick={handleClick} className={`text-base border rounded px-2 py-1 ${specialClass}`}>{button}</button> */}
      {
        buttonText && (
          <Button secondary outlined size="sm" handleClick={handleClick}>{buttonText}</Button>
        )
      }
    </div>
  );
};

export default SectionTitle;
