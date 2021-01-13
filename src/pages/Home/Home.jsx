import React from 'react';
import Base from '../../components/Base';
import { Hero } from '../../sections';

const Home = () => {
  return (
    <Base>
      <Hero nextSection="teste" />
      <div style={{ height: '300vh' }} id="teste"></div>
    </Base>
  );
};

export default Home;
