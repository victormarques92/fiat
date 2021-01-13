import styled from 'styled-components';
import Colors from '../../styles/colors';

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

export const ListMenu = styled.ul``;

export const Content = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  padding: 0 100px;
  transition: 0.4s ease-in-out;
  width: 100%;
`;
