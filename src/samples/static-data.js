import {
  appleLogo,
  autodeskLogo,
  behanceLogo,
  githubLogo,
  gitlabLogo,
  invisionLogo,
  mailchimpLogo,
  microsoftLogo,
  spotifyLogo,
} from '../assets';

export const FeaturedCompanyData = [
  {
    logo: appleLogo,
    rating: 4.5,
    employerName: 'Apple Inc',
    location: 'New York, USA',
    vacancies: 5,
    reviewCount: 19000,
  },
  {
    logo: mailchimpLogo,
    rating: 3.2,
    employerName: 'Mailchimp',
    location: 'San Francisco, USA',
    vacancies: 1,
    reviewCount: 21500,
  },
  {
    logo: gitlabLogo,
    rating: 2.6,
    employerName: 'Gitlab',
    location: 'San Francisco, USA',
    vacancies: 0,
    reviewCount: 7000,
  },
];

export const SimilarCompaniesData = [
  {
    logo: appleLogo,
    rating: 4.5,
    employerName: 'Apple Inc',
    location: 'New York, USA',
    vacancies: 5,
    reviewCount: 19000,
  },
  {
    logo: autodeskLogo,
    rating: 4.0,
    employerName: 'Autodesk',
    location: 'New York, USA',
    vacancies: 1,
    reviewCount: 21500,
  },
  {
    logo: behanceLogo,
    rating: 3.8,
    employerName: 'Behance',
    location: 'New York, USA',
    vacancies: 0,
    reviewCount: 7000,
  },
  {
    logo: invisionLogo,
    rating: 2.5,
    employerName: 'Invision',
    location: 'New York, USA',
    vacancies: 0,
    reviewCount: 4200,
  },
  {
    logo: spotifyLogo,
    rating: 4.9,
    employerName: 'Spotify',
    location: 'New York, USA',
    vacancies: 0,
    reviewCount: 18700,
  },
  {
    logo: microsoftLogo,
    rating: 4.8,
    employerName: 'Microsoft',
    location: 'New York, USA',
    vacancies: 0,
    reviewCount: 38700,
  },
  {
    logo: githubLogo,
    rating: 4.7,
    employerName: 'GitHub',
    location: 'New York, USA',
    vacancies: 0,
    reviewCount: 35200,
  },
  {
    logo: mailchimpLogo,
    rating: 3.7,
    employerName: 'Mailchimp',
    location: 'New York, USA',
    vacancies: 0,
    reviewCount: 6200,
  },
];

export const FilterDropdowns = [
  {
    name: 'Type of Employment',
    options: [
      {
        name: 'Full Time',
        results: 103,
        value: 'FULLTME',
      },
      {
        name: 'Part Time',
        results: 142,
        value: 'PARTTIME',
      },
      {
        name: 'Internship',
        results: 142,
        value: 'INTERN',
      },
      {
        name: 'Remote',
        results: 142,
        value: 'REMOTE',
      },
      {
        name: 'Contract',
        results: 142,
        value: 'CONTRACTOR',
      },
    ],
  },
  {
    name: 'Experience Level',
    options: [
      {
        name: 'Over 3 Years Experience',
        results: 103,
        value: 'more_than_3_years_experience',
      },
      {
        name: 'Under 3 Years Experience',
        results: 142,
        value: 'under_3_years_experience',
      },
      {
        name: 'No Experience',
        results: 142,
        value: 'no_experience',
      },
      {
        name: 'No Degree',
        results: 142,
        value: 'no_degree',
      },
    ],
  },
  {
    name: 'Location',
  },
  {
    name: 'Language',
  },
  {
    name: 'Facility',
  },
];

export const Countires = [
  'USA',
  'England',
  'Brazil',
  'Nepal',
  'Thailand',
  'Poland',
  'Belgium',
  'France',
  'Germany',
  'Italy',
  'India',
  'Pakistan',
];
