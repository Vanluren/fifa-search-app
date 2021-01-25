import React, { useState, useEffect, ReactElement } from "react";
import ProfileFallback from "assets/profile-fallback.jpg";

type Props = {
  imageSrc: string;
  name: string;
};

const Mugshot = ({ imageSrc, name }: Props): ReactElement => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => setImage(imageSrc);
    image.onerror = (e) => setImage(ProfileFallback);
  }, [imageSrc]);

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="w-16 h-16 object-fill rounded-full"
      />
    );
  }
  return (
    <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
  );
};

export default Mugshot;
