import React, { useCallback, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Midia from '../../components/Midia';
import Modal from '../../components/Modal';
import { Col, Row } from '../../styles/grid';
import { Brand, Container, NextSection } from './styles';

import logo from '../../assets/images/main-car-brand.svg';

const api = [
  {
    hero: {
      title: 'NOVA CENTRAL MULTIMÍDIA',
      figure:
        'https://mobi.fiat.com.br/assets/features/pictures/desktop/central-multimidia.avif',
    },
    content: {
      figure:
        'https://mobi.fiat.com.br/assets/features/modais/desktop/central-multimidia.jpg',
      title: 'MAIS CONECTADA. MAIS INTERATIVA. MAIS COMPLETA.',
      description:
        'Nova Central Multimídia Uconnect de 7” é muito mais moderna e intuitiva. Ela possui conexão wireless via Apple CarPlay e Android Auto para você dirigir acompanhado dos seus apps favoritos. Além de pareamento simultâneo via Bluetooth com 2 smartphones. Com o volante multifuncional, a condução fica ainda mais segura e prática.',
      optional: '* Opcional nas versões Like e Trekking.',
    },
  },
  {
    hero: {
      title: 'NOVA VERSÃO TREKKING',
      figure:
        'https://mobi.fiat.com.br/assets/features/thumbs/desktop/agilidade.webp',
    },
    content: {
      figure:
        'https://mobi.fiat.com.br/assets/features/modais/desktop/agilidade.jpg',
      title: 'O ESPÍRITO AVENTUREIRO INVADE AS RUAS.',
      description:
        'O Fiat Mobi também está disponível na versão Trekking, que possui pintura bicolor exclusiva, acabamento interno com estilização dos bancos, Central Multimídia Uconnect de 7 e, claro, muita robustez e valentia.',
    },
  },
  {
    hero: {
      title: 'ESPAÇO E QUALIDADE',
      figure:
        'https://mobi.fiat.com.br/assets/features/thumbs/desktop/interior.avif',
    },
    content: {
      figure:
        'https://mobi.fiat.com.br/assets/features/modais/desktop/interior.jpg',
      title: 'MODERNO, JOVEM E MUIIIITO CONFORTÁVEL.',
      description:
        'A qualidade do acabamento interno do Fiat Mobi é impecável. O volante ganhou o novo logo Fiat e o espaço para o motorista continua enorrrrrme.',
    },
  },
  {
    hero: {
      title: 'DESIGN MAIS ROBUSTO',
      figure:
        'https://mobi.fiat.com.br/assets/features/thumbs/desktop/robustez.avif',
    },
    content: {
      figure:
        'https://mobi.fiat.com.br/assets/features/modais/desktop/robustez-02.jpg',
      title: 'O MOBI NÃO ANDA. O MOBI DESFILA.',
      description:
        'O Design do Fiat Mobi 2021 ficou mais moderno e robusto. Sua altura em relação ao solo garante mais segurança para rodar a cidade, enquanto sua nova grade frontal trás todo o estilo ítalo-brasileiro da marca Fiat.',
    },
  },
  {
    hero: {
      title: 'ECONOMIA E AGILIDADE',
      figure:
        'https://mobi.fiat.com.br/assets/features/thumbs/desktop/motor.avif',
    },
    content: {
      figure:
        'https://mobi.fiat.com.br/assets/features/modais/desktop/motor.jpg',
      title: 'ECONÔMICO NA CIDADE E FORA DELA TAMBÉM.',
      description:
        'Com uma excelente relação peso-potência, o motor Fire 1.0 do Fiat Mobi é o sonho de qualquer motorista que deseja dirigir com muita economia e eficiência.',
    },
  },
];

const Hero = ({ nextSection }) => {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState();

  const handleModal = useCallback(data => {
    setContentModal(data);
    setShowModal(true);
  }, []);

  return (
    <Container id="hero">
      <Brand>
        <img src={logo} alt="Fiat Mobi" />
      </Brand>

      <Row>
        <Col xl={6}>
          <Midia
            big
            image={api[0].hero.figure}
            title={api[0].hero.title}
            onClick={() => handleModal(api[0].content)}
          />
        </Col>
        <Col xl={6}>
          <Row>
            {api?.map(
              (item, index) =>
                index !== 0 && (
                  <Col xl={6} mb={20} key={index}>
                    <Midia
                      image={item.hero.figure}
                      title={item.hero.title}
                      onClick={() => handleModal(item.content)}
                    />
                  </Col>
                ),
            )}
          </Row>
        </Col>
      </Row>

      <NextSection href={`#${nextSection}`}>
        <FiChevronDown />
      </NextSection>

      <Modal
        visible={showModal}
        close={() => setShowModal(false)}
        data={contentModal}
      />
    </Container>
  );
};

export default Hero;
