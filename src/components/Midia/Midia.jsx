import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Container } from './styles';

const Midia = ({ image, title, onClick, big }) => {
  return (
    <Container onClick={onClick} big={big}>
      <img src={image} alt={title} />

      <footer>
        {title}
        <span>
          <FiPlus />
        </span>
      </footer>
    </Container>
  );
};

export default Midia;
