import { appleLogo, autodeskLogo, behanceLogo, githubLogo, gitlabLogo, invisionLogo, mailchimpLogo, microsoftLogo, spotifyLogo } from '../assets';

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
      },
      {
        name: 'Part Time',
        results: 142,
      },
      {
        name: 'Internship',
        results: 142,
      },
      {
        name: 'Remote',
        results: 142,
      },
      {
        name: 'Contract',
        results: 142,
      },
    ],
  },
  {
    name: 'Experience Level',
    options: [
      {
        name: 'Over 3 Years Experience',
        results: 103,
      },
      {
        name: 'Under 3 Years Experience',
        results: 142,
      },
      {
        name: 'No Experience',
        results: 142,
      },
      {
        name: 'No Degree',
        results: 142,
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
