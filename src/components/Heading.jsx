import React from 'react';

import { getDate } from '../utils';

const Heading = ({ heading }) => (
  <div className="flex flex-col space-y-5">
    <h1 className="font-bold ">
      {heading}
    </h1>
    <p className="text-natural-2 text-base">{getDate()}</p>
  </div>
);

export default Heading;
