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
  box-shadow: 5px 3px 6px 0 rgba(0, 0, 0, 0.14);
  height: 100vh;
  left: 0;
  position: relative;
  transition: 0.4s ease-in-out;
  width: ${props => (props.open ? 16.66667 : 0)}%;

  button {
    align-items: center;
    background-color: ${Colors.primary};
    box-shadow: 7px 0 5px 0 rgba(0, 0, 0, 0.16);
    display: flex;
    height: 84px;
    justify-content: center;
    left: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    z-index: 1;

    svg {
      color: ${Colors.white};
      font-size: 24px;
      transition: 0.4s ease-in-out;
      transform: ${props => (props.open ? '' : 'scaleX(-1)')};
    }
  }
`;

export const Header = styled.a`
  align-items: center;
  display: flex;
  height: 45px;
  padding: 12px 14px 6px;
  width: 100%;

  img {
    height: 27px;
    width: 45px;
  }

  span {
    color: ${Colors.white};
    font-weight: 700;
    margin-left: 12px;
  }
`;

export const Scroll = styled.div`
  height: calc(100vh - 45px);
  overflow-y: scroll;
  padding-bottom: 20px;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${Colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${Colors.secondary + Opacity.op20};
  }
`;

export const ListMenu = styled.ul`
  margin-bottom: 40px;
  margin-top: 12px;

  li {
    a {
      color: ${Colors.white};
      cursor: pointer;
      display: block;
      font-size: 14px;
      font-weight: 700;
      line-height: 15px;
      padding: 12px 16px;
    }

    ul {
      li {
        position: relative;
        padding-left: 40px;

        &::before {
          background-color: ${Colors.white};
          border-radius: 50%;
          content: '';
          display: block;
          height: 4px;
          width: 4px;

          position: absolute;
          top: calc(50% - 2px);
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
  font-size: 12px;
  font-weight: 700;
  height: 44px;
  margin: 0 16px;
  justify-content: center;

  & + a {
    margin-top: 12px;
  }
`;

export const Content = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  transition: 0.4s ease-in-out;
  width: 100%;
`;
