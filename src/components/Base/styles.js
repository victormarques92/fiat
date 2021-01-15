import styled from 'styled-components';
import Colors, { Opacity } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  overflow: hidden;
`;

export const Mask = styled.div`
  overflow: hidden;
`;

export const Menu = styled.div`
  background-color: ${Colors.primary};
  box-shadow: 0.3125rem 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.14);
  height: 100vh;
  left: 0;
  position: relative;
  transition: 0.4s ease-in-out;
  width: ${props => (props.open ? 16.66667 : 0)}%;

  button {
    align-items: center;
    background-color: ${Colors.primary};
    box-shadow: 0.4375rem 0 0.3125rem 0 rgba(0, 0, 0, 0.16);
    display: flex;
    height: 5.25rem;
    justify-content: center;
    left: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    z-index: 1;

    svg {
      color: ${Colors.white};
      font-size: 1.5rem;
      transition: 0.4s ease-in-out;
      transform: ${props => (props.open ? '' : 'scaleX(-1)')};
    }
  }
`;

export const Header = styled.a`
  align-items: center;
  display: flex;
  height: 2.813rem;
  padding: 0.75rem 0.875rem 0.375rem;
  width: 100%;

  img {
    height: 1.688rem;
    width: 2.813rem;
  }

  span {
    color: ${Colors.white};
    font-weight: 700;
    margin-left: 0.75rem;
  }
`;

export const Scroll = styled.div`
  height: calc(100vh - 2.813rem);
  overflow-y: scroll;
  padding-bottom: 1.25rem;

  ::-webkit-scrollbar {
    width: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${Colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${Colors.secondary + Opacity.op20};
  }
`;

export const ListMenu = styled.ul`
  margin-bottom: 2.5rem;
  margin-top: 0.75rem;

  li {
    a {
      color: ${Colors.white};
      cursor: pointer;
      display: block;
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 0.9375rem;
      padding: 0.75rem 1rem;
    }

    ul {
      li {
        position: relative;
        padding-left: 2.5rem;

        &::before {
          background-color: ${Colors.white};
          border-radius: 50%;
          content: '';
          display: block;
          height: 0.25rem;
          width: 0.25rem;

          position: absolute;
          top: calc(50% - 0.125rem);
        }
      }
    }
  }
`;

export const Button = styled.a`
  align-items: center;
  background-color: ${Colors.secondary};
  color: ${Colors.white};
  display: flex;
  font-size: 0.75rem;
  font-weight: 700;
  height: 2.75rem;
  margin: 0 1rem;
  justify-content: center;

  & + a {
    margin-top: 0.75rem;
  }
`;

export const Content = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  transition: 0.4s ease-in-out;
  width: 100%;
`;
