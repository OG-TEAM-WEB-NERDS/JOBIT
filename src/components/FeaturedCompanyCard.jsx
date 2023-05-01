import React from 'react';
import ImageWrapper from './shared/ImageWrapper';
import { RatingStars } from '.';
import { BriefcaseIcon, PinIcon } from '../assets';
import Button from './shared/Button';

const FeaturedCompanyCard = ({
  logo,
  rating = 3,
  employerName = 'Company',
  location = 'Neverland',
  vacancies = 10,
  reviewCount = 10000,
}) => {
  const formattedReviewCount = `${(reviewCount / 1000).toFixed(1)}k`;

  return (
    <div className="bg-white dark:bg-black-2 p-4 rounded-xl flex flex-col space-y-8 w-full">
      <div className="flex items-center space-x-3">
        <ImageWrapper src={logo} width={55} height={55} alt={employerName} />
        <div className="flex flex-col space-y-1">
          <h3 className="text-base">{employerName}</h3>
          <div className="flex items-center space-x-2">
            <div className="flex">
              <RatingStars rating={rating} />
            </div>
            <p className="text-natural-2 font-bold text-sm">
              {formattedReviewCount}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="flex gap-2 items-center text-natural-2 font-bold text-sm">
          <ImageWrapper
            src={PinIcon}
            alt="Pin icon"
            width={20}
            height={20}
            styles="grayscale"
          />
          {location}
        </p>
        <p className="flex gap-2 items-center text-natural-2 font-bold text-sm">
          <ImageWrapper
            src={BriefcaseIcon}
            alt="Briefcase icon"
            width={20}
            height={20}
            styles="grayscale"
          />
          {vacancies === 0 ? 'No' : vacancies} Job{' '}
          {vacancies === 1 ? 'Vacancy' : 'Vacancies'}
        </p>
      </div>
      <Button secondary fullWidth>
        See All
      </Button>
    </div>
  );
};

export default FeaturedCompanyCard;
