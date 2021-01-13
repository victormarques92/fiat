import styled, { keyframes } from 'styled-components';
import Colors, { Opacity } from '../../styles/colors';

export const Box = styled.div`
  align-items: center;
  background-color: ${Colors.black + Opacity.op50};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

export const Overlay = styled.div`
  background-color: transparent;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 0;
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    top: -50%;
  }

  to {
    opacity: 1;
    top: 0;
  }
`;

export const Content = styled.div`
  animation: ${slideUp} 0.3s linear;
  background-color: ${Colors.primary};
  padding: 40px;
  position: relative;
  width: 950px;
  z-index: 1;

  button {
    align-items: center;
    background-color: ${Colors.secondary};
    color: ${Colors.white};
    display: flex;
    font-size: 32px;
    height: 50px;
    justify-content: center;
    position: absolute;
    right: -25px;
    top: 40px;
    width: 50px;

    svg {
      transition: 0.15s ease-in-out;
    }

    &:hover {
      svg {
        transform: scale(1.1);
      }
    }
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: calc(100% - 160px);
  }

  div {
    background-color: ${Colors.white};
    margin-top: -155px;
    padding: 175px 80px 40px;

    h3 {
      color: ${Colors.greyMedium};
      font-size: 20px;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 20px;
    }

    p,
    span {
      color: ${Colors.greyMedium};
      font-size: 16px;
      font-weight: 500;
      line-height: 18px;
    }

    span {
      font-size: 14px;
    }
  }
`;
