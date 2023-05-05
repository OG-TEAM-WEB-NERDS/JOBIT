import React, { useState } from 'react';
import Image from 'next/image';

import { ChevronDownIcon } from '../../assets';

const FilterDropdown = ({ label, options, selection, setSelection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    //Checkbox cheked
    const checked = event.target.checked;
    //Checkbox value
    const optionValue = event.target.value;

    switch (optionValue) {
      case 'FULLTIME':
      case 'PARTTIME':
      case 'INTERN':
      case 'CONTRACTOR':
        checked
          ? setSelection({ ...selection, empType: event.target.value })
          : setSelection({ ...selection, empType: '' });

        break;
      case 'REMOTE':
        checked
          ? setSelection({ ...selection, remote_jobs_only: true })
          : setSelection({ ...selection, remote_jobs_only: false });
        break;
      case 'no_experience':
      case 'no_degree':
      case 'more_than_3_years_experience':
      case 'under_3_years_experience':
        checked
          ? setSelection({ ...selection, requirementType: event.target.value })
          : setSelection({ ...selection, requirementType: '' });
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h5>{label}</h5>
        <div className={`p-2 ${isOpen && 'rotate-180'}`}>
          <Image
            src={ChevronDownIcon}
            alt="Chevron icon"
            width={20}
            height={20}
            className="grayscale"
          />
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
                  value={option.value}
                  onChange={handleChange}
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
