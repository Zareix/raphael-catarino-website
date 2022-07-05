import React, { useContext } from 'react';

import { HomeContext } from '../../../pages';

const Hero = () => {
  const data = useContext(HomeContext);

  return (
    <div>
      <h1>{data?.hero.Title}</h1>
      <h2>{data?.hero.Subtitle}</h2>
    </div>
  );
};

export default Hero;
