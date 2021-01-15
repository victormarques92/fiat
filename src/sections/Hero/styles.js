import styled, { keyframes } from 'styled-components';
import Colors from '../../styles/colors';
import MainBG from '../../assets/images/main-bg.svg';

export const Container = styled.section`
  background-color: ${Colors.primary};
  font-size: 1rem;
  height: 100vh;
  position: relative;

  &::before {
    background-image: url(${MainBG});
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100%;
    content: '';
    display: block;
    height: calc(100% - 5rem);
    left: 0;
    position: absolute;
    top: 5rem;
    width: 100%;
    z-index: 0;
  }
`;

export const Brand = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5rem 1rem 2rem;
`;

const bounce = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(0.5rem);
  }
`;

export const NextSection = styled.a`
  align-items: center;
  animation: ${bounce} 1s linear infinite;
  color: white;
  display: flex;
  font-size: 2.5rem;
  justify-content: center;
  margin-top: 1rem;
`;
