import React from 'react';
import ImageWrapper from './shared/ImageWrapper';

import { PlusIcon } from '../assets';
import { Button, RatingStars } from './shared';

const SimilarCompaniesCard = ({
  logo,
  rating = 3,
  employerName = 'Company',
  location = 'Neverland',
  reviewCount = 10000,
}) => {
  const formattedReviewCount = `${(reviewCount / 1000).toFixed(1)}k`;

  return (
    <div className="w-full flex flex-wrap justify-between items-center gap-6 rounded-lg p-4 dark:bg-black-2">
      <div className="flex flex-wrap sm:flex-nowrap gap-4 items-center">

        <div className="flex items-center p-2 bg-natural-4 rounded-xl aspect-square w-16 h-16">
          <ImageWrapper
            src={logo}
            alt={employerName}
            width={50}
            height={50}
            styles="object-contain rounded-lg w-full h-full"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex gap-2 items-center flex-wrap">
            <p className="font-semibold">{employerName}</p>
            <div className="flex gap-2 items-center">
              <RatingStars rating={rating} />
              <p className="text-natural-2 font-bold text-sm">
                {formattedReviewCount}
              </p>
            </div>
          </div>
          <p className="text-sm text-natural-2 font-medium">{location}</p>
        </div>
      </div>
      <div className="w-full sm:w-auto xl:w-full 2xl:w-auto">
        <Button outlined fullWidth icon={PlusIcon}>
          Follow
        </Button>
      </div>
    </div>
  );
};

export default SimilarCompaniesCard;
