import React from 'react';

import { Button } from './shared';
import { BellIcon } from '../assets';

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

    <h2>Standard buttons</h2>
    <div className="flex flex-wrap gap-4">
      <Button primary>Primary button</Button>
      <Button secondary>Secondary button</Button>
      <Button primary outlined>Outlined primary button</Button>
      <Button secondary outlined>Outlined secondary button</Button>
    </div>

    <h2>Icon buttons</h2>
    <div className="flex flex-wrap gap-4">
      <Button primary icon={BellIcon}>Primary button</Button>
      <Button secondary icon={BellIcon}>Secondary button</Button>
      <Button primary outlined icon={BellIcon}>Outlined primary button</Button>
      <Button secondary outlined icon={BellIcon}>Outlined secondary button</Button>
    </div>

    <h2>Standalone icon buttons</h2>
    <div className="flex flex-wrap gap-4">
      <Button primary icon={BellIcon} />
      <Button secondary icon={BellIcon} />
      <Button primary outlined icon={BellIcon} />
      <Button secondary outlined icon={BellIcon} />
    </div>
  </div>
);

export default DesignSystem;
