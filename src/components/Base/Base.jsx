import React, { useCallback, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import logo from '../../assets/images/fiat.svg';

import {
  Button,
  Container,
  Content,
  Header,
  ListMenu,
  Mask,
  Menu,
  Scroll,
} from './styles';

const Base = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleMenu = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Container>
      <Menu open={open}>
        <button onClick={handleMenu}>
          <FiChevronLeft />
        </button>

        <Mask>
          <Header href="#hero">
            <img src={logo} alt="FIAT MOBI" />
            <span>FIAT MOBI</span>
          </Header>

          <Scroll>
            <ListMenu>
              <li>
                <a href="#hero">MOBI 2021</a>
              </li>
              <li>
                <a href="#versions">TODAS AS VERSÕES</a>
              </li>
              <li>
                <a href="#">MOBI TREKKING</a>
              </li>
              <li>
                <a href="#">FOTOS</a>
              </li>
              <li>
                <a href="#">TUDO DO MOBI:</a>

                <ul>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Interior</a>
                  </li>
                  <li>
                    <a href="#">Tecnologia</a>
                  </li>
                  <li>
                    <a href="#">Performance</a>
                  </li>
                  <li>
                    <a href="#">Acessórios</a>
                  </li>
                  <li>
                    <a href="#">Pacotes de Serviços</a>
                  </li>
                </ul>
              </li>
            </ListMenu>

            <Button>MONTE O SEU</Button>
            <Button>MONTE O SEU</Button>
            <Button>MONTE O SEU</Button>
          </Scroll>
        </Mask>
      </Menu>
      <Content open={open}>{children}</Content>
    </Container>
  );
};

export default Base;
