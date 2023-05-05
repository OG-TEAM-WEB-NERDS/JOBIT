import Image from 'next/image';
import { isValidUrl } from '../../utils';
import { JobItIcon } from '../../assets';

const ImageWrapper = ({ src, width, height, alt, styles }) => {
  let imageSrc;

  // Check if image src exists, replace with placeholder if not
  if (!src) {
    imageSrc = JobItIcon;
  } else {
    imageSrc = src;
  }

  // On image error, replace src and alt and remove srcset attribute
  const handleImageError = (e) => {
    e.target.src = JobItIcon.src;
    e.target.removeAttribute('srcset');
    e.target.alt = 'Fallback image';
  };

  const parsedURL = isValidUrl(src);
  // In case of http use the html img tag
  if (parsedURL && parsedURL.protocol === 'http:') {
    return (
      <img
        src={imageSrc}
        width={width}
        height={height}
        alt={alt}
        className={styles}
        onError={handleImageError}
      />
    );
  }

  // Otherwise use the Image component from next/image in case of an https URL or icon being passed as src
  return (
    <Image
      src={imageSrc}
      width={width}
      height={height}
      alt={alt}
      className={styles}
      onError={handleImageError}
    />
  );
};

export default ImageWrapper;
