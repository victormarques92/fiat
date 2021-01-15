import React from 'react';
import Base from '../../components/Base';
import { Footer, Hero, Versions } from '../../sections';
import { CallToAction } from './styles';

const Home = () => {
  return (
    <Base>
      <Hero nextSection="versions" />
      <Versions />

      <CallToAction>
        <span>Gostou desta versão?</span>

        <a href="https://mobi.fiat.com.br/monte.html" target="blank">
          Monte o seu
        </a>
        <a href="#">Compre o seu</a>
      </CallToAction>

      <Footer />
    </Base>
  );
};

export default Home;
