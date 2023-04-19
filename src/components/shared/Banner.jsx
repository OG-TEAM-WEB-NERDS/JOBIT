import Image from 'next/image';

const Banner = ({ logo, bannerBg = 'bg-job-detail-bg' }) => (
  <section className={`w-full pt-40 ${bannerBg} rounded-t-lg relative`}>
    <Image
      src={logo}
      alt="Employer Logo"
      width={50}
      height={50}
      className="absolute -bottom-6 left-4 rounded-md"
    />
  </section>
);

export default Banner;
