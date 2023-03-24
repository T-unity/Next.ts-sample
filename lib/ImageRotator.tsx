import React, { useState } from 'react';
import styles from '@/styles/Gift.module.css'
import Image from 'next/image'

type Props = {
  initialImage: string;
  resultImages: { hit: string; miss: string };
  width: number;
  height: number;
};

const ImageRotator: React.FC<Props> = ({ initialImage, resultImages, width, height }) => {
  const [imageSrc, setImageSrc] = useState(initialImage);
  const [animationClass, setAnimationClass] = useState('');

  const displayImage = () => {
    setAnimationClass(styles.rotateYAnimation);

    setTimeout(() => {
      const isHit = Math.random() >= 0.5;
      setImageSrc(isHit ? resultImages.hit : resultImages.miss);
      setAnimationClass('');
    }, 1000);
  };

  return (
    <Image
      src={imageSrc}
      alt="Image Rotator"
      onClick={displayImage}
      className={animationClass}
      width={width}
      height={height}
    />
  );
};

export default ImageRotator;