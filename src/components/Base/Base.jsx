import React, { useCallback, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import logo from '../../assets/images/fiat.svg';

import { Container, Content, Header, ListMenu, Mask, Menu } from './styles';

const Base = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleMenu = useCallback(() => {
    setOpen(!open);
    console.log(open);
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

          <ListMenu>
            <li>
              <a href="#hero">Hero</a>
            </li>
          </ListMenu>
        </Mask>
      </Menu>
      <Content open={open}>{children}</Content>
    </Container>
  );
};

export default Base;
