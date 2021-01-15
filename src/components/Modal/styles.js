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
  padding: 2.5rem;
  position: relative;
  width: 59.38rem;
  z-index: 1;

  button {
    align-items: center;
    background-color: ${Colors.secondary};
    color: ${Colors.white};
    display: flex;
    font-size: 2rem;
    height: 3.125rem;
    justify-content: center;
    position: absolute;
    right: -1.563rem;
    top: 2.5rem;
    width: 3.125rem;

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
    max-width: calc(100% - 10rem);
  }

  div {
    background-color: ${Colors.white};
    margin-top: -9.688rem;
    padding: 10.94rem 5rem 2.5rem;

    h3 {
      color: ${Colors.greyMedium};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.25rem;
      margin-bottom: 1.25rem;
    }

    p,
    span {
      color: ${Colors.greyMedium};
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.125rem;
    }

    span {
      font-size: 0.875rem;
    }
  }
`;
