import React from 'react';

const DesignSystem = () => (
  <div className="flex flex-col gap-8">
    <div className="flex flex-col gap-4">
      <h1>H1 Headline</h1>
      <h2>H2 Headline</h2>
      <h3>H3 Headline</h3>
      <h4>H4 Headline</h4>
      <h5>H5 Headline</h5>
    </div>
    <div className="flex">
      <div className="font-bold bg-primary text-white h-16 w-full flex justify-center items-center">Primary</div>
    </div>
    <div className="flex">
      <div className="font-bold text-white bg-black-1 h-16 w-full flex justify-center items-center">Black 1</div>
      <div className="font-bold text-white bg-black-2 h-16 w-full flex justify-center items-center">Black 2</div>
      <div className="font-bold text-white bg-black-3 h-16 w-full flex justify-center items-center">Black 3</div>
    </div>
    <div className="flex">
      <div className="font-bold bg-natural-1 text-white h-16 w-full flex justify-center items-center">Natural 1</div>
      <div className="font-bold bg-natural-2 h-16 w-full flex justify-center items-center">Natural 2</div>
      <div className="font-bold bg-natural-3 h-16 w-full flex justify-center items-center">Natural 3</div>
      <div className="font-bold bg-natural-4 h-16 w-full flex justify-center items-center">Natural 4</div>
      <div className="font-bold bg-natural-5 h-16 w-full flex justify-center items-center">Natural 5</div>
      <div className="font-bold bg-natural-6 h-16 w-full flex justify-center items-center">Natural 6</div>
    </div>

    <div className="flex gap-4">
      <button type="button" className="btn btn-primary">Primary button</button>
      <button type="button" className="btn btn-secondary">Secondary button</button>
      <button type="button" className="btn btn-primary btn-outlined">Outlined primary button</button>
      <button type="button" className="btn btn-secondary btn-outlined">Outlined secondary button</button>
    </div>
  </div>
);

export default DesignSystem;
