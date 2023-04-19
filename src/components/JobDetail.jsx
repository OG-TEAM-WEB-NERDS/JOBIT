import Image from 'next/image';

import jobs from '../samples/search';
import { EllipsisIcon, PlusIcon, SavedIcon } from './icons';
import Banner from './shared/Banner';
import Button from './Button';

const JobDetail = () => {
  const job = jobs.data[0];

  //   const jsonParse = (string) =>
  //     string
  //       .replace(/\n/g, '\\\\n')
  //       .replace(/\r/g, '\\\\r')
  //       .replace(/\t/g, '\\\\t');

  //   const htmlPart = job.job_description;
  return (
    <article className="w-full bg-white dark:bg-black-2 px-4 py-2 rounded-md">
      <header>
        <Banner logo={job.employer_logo} />

        <div className="flex justify-between mt-10">
          {/* summary */}
          <div className="flex flex-col items-center">
            <div className="flex">
              <h2>{job.job_title}</h2>
              <SavedIcon />
            </div>
            <div className="flex w-full">
              <ul className="flex w-full justify-between">
                <li className="text-xxs">{job.employer_name}</li>
                <li className="text-xxs">
                  {job.job_city},{job.job_country}
                </li>
                <li className="text-xxs">3 days </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex justify-between items-center">
            <button className="btn-primary text-white rounded-md px-2 py-2 text-sm mr-2">
              Apply now
            </button>
            <button className="btn-secondary text-white rounded-md px-2 py-2 text-sm">
              Message
            </button>
            <button>
              <EllipsisIcon />
            </button>
          </div>
        </div>

        {/* highlights */}
        <div className="flex w-4/5 mx-auto bg-natural-4 dark:bg-black-3 justify-between items-center my-4 p-4 rounded-lg">
          {/* Experience required */}
          <div className="flex flex-col">
            <h4 className="text-xxxs">Experience</h4>
            <p className="text-xxs">Minimum 1 year</p>
          </div>

          {/* Experience required */}
          <div className="flex flex-col">
            <h4 className="text-xxxs">Work Level</h4>
            <p className="text-xxs">Senior Level</p>
          </div>

          {/* Experience required */}
          <div className="flex flex-col">
            <h4 className="text-xxxs">Employee Type</h4>
            <p className="text-xxs">Full Time Jobs</p>
          </div>

          {/* Experience required */}
          <div className="flex flex-col">
            <h4 className="text-xxxs">Offer Salary</h4>
            <p className="text-xxs">$2150/month</p>
          </div>
        </div>
      </header>

      {/* job details section */}
      <section className="my-5">
        <h2 className="text-sm my-3">About the job</h2>
        <p className="text-sm my-3">{job.job_description}</p>

        {/* <p className="my-3">{ReactHtmlParser(job.job_description)}</p> */}
        {/* <p className="my-3">{parse(job.job_description)}</p> */}
        {/* <div dangerouslySetInnerHTML={{ __html: `${htmlPart}` }} /> */}
        {/* <div dangerouslySetInnerHTML={{ __html: '<h1>Hi there!</h1>' }} /> */}
      </section>

      <section>
        <h2 className="text-sm my-3">About the Company</h2>
        <div className="flex flex-col">
          {/* company header */}
          <div className="flex justify-between py-4">
            <div className="flex">
              <Image
                src={job.employer_logo}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div className=" ml-3 flex flex-col justify-center items-center">
                <h3 className="text-xs">{job.employer_name}</h3>
                <p className="text-xxs">{job.employer_company_type}</p>
              </div>
            </div>

            {/* follow button */}
            <Button primary outlined>
              <PlusIcon />
              Follow
            </Button>
          </div>
          {/* <p className="text-sm">{`${job.employer_name} is a ${
            job.employer_company_type
          } company. To find out more about their work and career progression opportunities, please visit`</p>} */}
          <p className="text-sm">
            {`${job.employer_name} is a ${job.employer_company_type} company. To find out more about their work and career progression opportunities, please visit `}
            <a href={job.employer_website} className="underline">
              {job.employer_name}
            </a>
            .
          </p>
        </div>
      </section>
    </article>
  );
};

export default JobDetail;
