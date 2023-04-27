import Image from 'next/image';
import { useRouter } from 'next/router';

import { EllipsisIcon, PlusIcon, SavedFilledIcon, SavedOutlinedIcon } from '../assets';
import Banner from './shared/Banner';
import Button from './shared/Button';
import { useGetJobDetailsQuery } from '../services/JSearch';

const JobDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isFetching, isError } = useGetJobDetailsQuery(id);

  if (isFetching) {
    return (
      <div className="font-semibold text-black-3 dark:text-gray-200 mx-2">
        Wait while data fetching!!!
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className="
        font-semibold
        text-black-3
        dark:text-gray-200
        mx-2"
      >
        Error while fetching!!!
      </div>
    );
  }

  const job = data.data[0];

  return (
    <div className="w-full px-4 pb-2 rounded-md">
      <header className="mt-3">
        <Banner
          logo={job?.employer_logo || 'https://via.placeholder.com/60x60'}
        />

        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* summary */}
          <div className="flex flex-col items-center">
            <div className="flex items-center ">

              <h2>{job?.job_title}</h2>

              <button type="button">
                <Image
                  src={SavedOutlinedIcon}
                  alt="Save icon"
                  width={20}
                  height={20}
                  className="grayscale"
                />
              </button>

            </div>
            <div className="flex w-full">
              <ul className="flex w-full space-x-3">
                <li className="text-xxs">
                  Company:
                  <span className="font-semibold italic">
                    {job?.employer_name}
                  </span>
                </li>
                <li className="text-xxs">
                  Location:
                  <span className="font-semibold italic">
                    {job?.job_city},{job?.job_country}
                  </span>
                </li>
                <li className="text-xxs">
                  Type:
                  <span className="font-semibold italic">
                    {job?.job_employment_type}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex my-3 justify-between items-center gap-2">
            <Button primary size="sm">
              Apply Now
            </Button>
            <Button secondary outlined size="sm">
              Message
            </Button>
            <button type="button" className="rotate-90">
              <Image
                src={EllipsisIcon}
                alt="Ellipsis icon"
                width={20}
                height={20}
                className="grayscale"
              />
            </button>
          </div>
        </div>

        {/* highlights */}
        <div className="flex flex-col md:flex-row w-full md:w-4/5 mx-auto bg-natural-4 dark:bg-black-3 justify-start items-start md:justify-between md:items-center my-4 p-4 rounded-lg">
          {/* Experience required */}
          <div className="flex flex-col my-2 md:my-0">
            <h4 className="text-xxxs">Experience</h4>
            <p className="text-xxs">Minimum 1 year</p>
          </div>

          {/* Experience required */}
          <div className="flex flex-col my-2 md:my-0">
            <h4 className="text-xxxs">Work Level</h4>
            <p className="text-xxs">Senior Level</p>
          </div>

          {/* Experience required */}
          <div className="flex flex-col my-2 md:my-0">
            <h4 className="text-xxxs">Employee Type</h4>
            <p className="text-xxs">Full Time Jobs</p>
          </div>

          {/* Experience required */}
          <div className="flex flex-col my-2 md:my-0">
            <h4 className="text-xxxs">Offer Salary</h4>
            <p className="text-xxs">$2150/month</p>
          </div>
        </div>
      </header>

      {/* job details section */}
      <section className="my-5">
        <h2 className="text-sm my-3">About the job</h2>
        <p className="text-sm my-3">{job?.job_description}</p>
      </section>

      <section>
        <h2 className="text-sm my-3">About the Company</h2>
        <div className="flex flex-col">
          {/* company header */}
          <div className="flex justify-between items-center py-4">
            <div className="flex">?
              <Image
                src={job?.employer_logo || 'https://via.placeholder.com/50x50'}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div className=" ml-3 flex flex-col justify-center items-center">
                <h3 className="text-xs">{job?.employer_name}</h3>
                <p className="text-xxs">{job?.employer_company_type}</p>
              </div>
            </div>

            {/* follow button */}
            <Button primary outlined size="sm" icon={PlusIcon}>
              Follow
            </Button>
          </div>

          <p className="text-sm">
            {`${job?.employer_name} is a ${job?.employer_company_type} company. To find out more about their work and career progression opportunities, please visit `}
            <a href={job?.employer_website} className="underline">
              {job?.employer_name}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default JobDetail;
