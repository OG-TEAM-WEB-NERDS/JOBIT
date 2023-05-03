import ImageWrapper from './ImageWrapper';

const Banner = ({ logo, bannerBg = 'bg-job-detail-bg' }) => (
  <div
    className={`w-full pt-40 mb-16 ${bannerBg} rounded-t-lg relative bg-no-repeat bg-cover`}
  >
    <div className="flex items-center p-2 bg-natural-4 rounded-xl aspect-square w-16 h-16 absolute -bottom-6 left-4">
      <ImageWrapper
        src={logo}
        alt="Employer Logo"
        width={50}
        height={50}
        styles="object-contain rounded-lg select-none w-full h-full"
      />
    </div>
  </div>
);

export default Banner;
