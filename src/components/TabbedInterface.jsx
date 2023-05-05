import React, { useState } from 'react';

import Button from './shared/Button';
import {
  AboutTab,
  JobsTab,
  ProductsTab,
  EmployeesTab,
  LocationsTab,
  ReviewsTab,
} from '.';

const TabbedInterface = (companyId) => {
  const tabs = [
    { id: 1, name: 'About', component: <AboutTab /> },
    { id: 2, name: 'Jobs', component: <JobsTab /> },
    { id: 3, name: 'Products', component: <ProductsTab /> },
    { id: 4, name: 'Employees', component: <EmployeesTab /> },
    { id: 5, name: 'Locations', component: <LocationsTab /> },
    { id: 6, name: 'Reviews', component: <ReviewsTab /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[1]);

  return (
    <div className="flex-gap space-y-10">
      <div className="flex gap-2 flex-wrap">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            secondary
            outlined
            isActive={index === activeTab.id - 1}
            handleClick={() => setActiveTab(tab)}
          >
            {tab.name}
          </Button>
        ))}
      </div>

      <div className="bg-white dark:bg-black-3 w-full rounded-lg p-4 flex flex-col space-y-6">
        {activeTab.component}
      </div>
    </div>
  );
};

export default TabbedInterface;
