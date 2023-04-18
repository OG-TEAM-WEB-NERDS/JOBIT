import { appleLogo, gitlabLogo, mailchimpLogo } from '../assets';

export const FeaturedCompanies = [
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
    location: 'New York, USA',
    vacancies: 1,
    reviewCount: 21500,
  },
  {
    logo: gitlabLogo,
    rating: 2.6,
    employerName: 'Gitlab',
    location: 'New York, USA',
    vacancies: 0,
    reviewCount: 7000,
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
        name: 'Freelance',
        results: 142,
      },
      {
        name: 'Remote',
        results: 142,
      },
      {
        name: 'Co-founder',
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
        name: 'Senior Level',
        results: 103,
      },
      {
        name: 'Entry Level',
        results: 142,
      },
      {
        name: 'Mid Level',
        results: 142,
      },
      {
        name: 'Student Level',
        results: 142,
      },
      {
        name: 'Directors',
        results: 142,
      },
      {
        name: 'VP or Above',
        results: 142,
      },
      {
        name: 'Contract',
        results: 142,
      },
    ],
  },
  {
    name: 'Salary Range',
    options: [
      {
        name: '$0 - $100',
        results: 103,
      },
      {
        name: '$101 - $200',
        results: 142,
      },
      {
        name: '$201 - $500',
        results: 142,
      },
      {
        name: '$501 - $750',
        results: 142,
      },
      {
        name: '$751 - $1000',
        results: 142,
      },
      {
        name: '$1000 Above',
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
