import { useState } from 'react';

const RangeSlider = ({ min, max }) => {
  const [value, setValue] = useState(min);

  const handleOnChange = (event) => {
    setValue(Math.ceil(event.target.value / 100) * 100);
  };

  function handleInput(event) {
    const newValue = (event.target.value - event.target.min) / (event.target.max - event.target.min) * 100;
    setValue(newValue);
    event.target.style.background = `linear-gradient(to right, #0BAB7C 0%, #0BAB7C ${newValue}%, #fff ${newValue}%, white 100%)`;
  }

  return (
    <div className="w-full">
    <h5 className='transition font-semibold dark:text-natural-3 pb-3'>Salary Range</h5>
      <input
        id="myinput"
        type="range"
        min={min}
        max={max}
        value={value}
        onInput={handleInput}
        onChange={handleOnChange}
        className="w-full h-1.5 bg-gray-200 rounded-md appearance-none cursor-pointer focus:outline-none"
      />
      <div className="flex justify-between mt-2">
        <span className="text-gray-600">{min}</span>
        <span className="text-gray-600">{max}</span>
      </div>
      <div className="mt-2 text-center">
        <span className="text-lg font-semibold text-natural-1 dark:text-natural-2">{value}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
