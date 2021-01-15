import React from 'react';
import * as mini from '../../assets/images/mini';
import * as main from '../../assets/images/main';
import Tabs from '../../components/Tabs';
import { Container } from './styles';

const listVersions = [
  {
    id: 1,
    name: 'MOBI EASY',
    image: {
      mini: mini.easy,
      main: main.easy,
    },
    items: [
      'Air bags',
      'Faróis com mascara negra',
      'Alerta de cinto de segurança',
      'Nova grade frontal',
    ],
  },
  {
    id: 2,
    name: 'MOBI LIKE',
    image: {
      mini: mini.like,
      main: main.like,
    },
    items: [
      'Ar condicionado',
      'Direção hidráulica',
      'Mais altura do solo',
      'Vidros e travas elétricas',
    ],
  },
  {
    id: 3,
    name: 'MOBI TREKKING',
    image: {
      mini: mini.trekking,
      main: main.trekking,
    },
    items: [
      'Bancos com acabamento Premium',
      'Nova central multimídia',
      'Rodas de liga leve',
      'Teto bicolor',
    ],
  },
];

const Versions = () => {
  return (
    <Container id="versions">
      <h2>Veja as versões em 360º e descubra qual é a sua cara.</h2>

      <Tabs list={listVersions} />
    </Container>
  );
};

export default Versions;
