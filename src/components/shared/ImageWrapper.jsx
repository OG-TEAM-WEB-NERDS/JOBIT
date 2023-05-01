import Image from 'next/image';
import { isValidUrl } from '../../utils';

const ImageWrapper = ({ src, width, height, alt, styles }) => {
  const parsedURL = isValidUrl(src);
  //   in case of http use the html img tag
  if (parsedURL && parsedURL.protocol === 'http:') {
    return (
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={styles}
      />
    );
  }

  //   otherwise use the Image component from next/image in case of an https URL or icon being passed as src
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={styles}
    />
  );
};

export default ImageWrapper;
