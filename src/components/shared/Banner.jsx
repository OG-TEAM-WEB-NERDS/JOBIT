import Image from 'next/image';

const Banner = ({ logo, bannerBg = 'bg-job-detail-bg' }) => (
  <div className={`w-full pt-40 mb-16 ${bannerBg} rounded-t-lg relative bg-no-repeat bg-cover`}>
    <Image
      src={logo}
      alt="Employer Logo"
      width={60}
      height={60}
      className="absolute -bottom-6 left-4 rounded-md border-2 border-white dark:border-black-3 select-none"
    />
  </div>
);

export default Banner;
