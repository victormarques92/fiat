import React from 'react';
import { FiX } from 'react-icons/fi';
import { Box, Content, Overlay } from './styles';

const Modal = ({ visible, close, data }) => {
  return (
    visible && (
      <Box>
        <Overlay onClick={close} />
        <Content>
          <button onClick={close}>
            <FiX />
          </button>

          <img src={data?.figure} alt={data?.title} />

          <div>
            <h3>{data?.title}</h3>
            <p>{data?.description}</p>
            {data?.optional && <span>{data?.optional}</span>}
          </div>
        </Content>
      </Box>
    )
  );
};

export default Modal;
