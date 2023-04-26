import React, { useState } from 'react';

import { ChevronIcon } from '../icons';

const FilterDropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h5>{label}</h5>
        <div className={`p-2 ${isOpen && 'rotate-180'}`}>
          <ChevronIcon />
        </div>
      </button>

      {isOpen && (
        <div className="flex flex-col gap-3">
          {options?.map((option, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3 select-none">
                <input
                  className="filterCheckbox"
                  type="checkbox"
                  id={option.name}
                  name="full-time"
                  value=""
                />
                <label
                  className="transition cursor-pointer font-medium dark:text-natural-3 hover:text-natural-1 hover:dark:text-natural-2"
                  htmlFor={option.name}
                >
                  {option.name}
                </label>
              </div>
              <p className="px-2 py-0.5 bg-natural-4 dark:bg-black-3 rounded-md dark:text-natural-3 text-sm font-medium select-none">
                {option.results}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
