import Image from 'next/image';

import { LoaderIcon } from '../../assets';

const Loader = () => (
  <div className="flex items-center justify-center w-full gap-4">
    <Image
      src={LoaderIcon}
      alt="Loader"
      width={50}
      height={50}
      className="loader"
    />
    <h2>Loading</h2>
  </div>
);

export default Loader;
