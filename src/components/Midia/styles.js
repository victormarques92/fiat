import styled from 'styled-components';
import Colors, { Opacity } from '../../styles/colors';

export const Container = styled.div`
  border-radius: 0 0 12px 0;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    svg {
      transform: scale(1.3);
    }
  }

  img {
    height: 100%;
    margin-bottom: -4px;
    width: 100%;
  }

  footer {
    background-color: white;
    color: ${Colors.primary};
    font-size: ${props => (props.big ? 20 : 12)}px;
    font-weight: 700;
    line-height: ${props => (props.big ? 20 : 10)}px;
    padding: ${props => (props.big ? 12 : 8)}px;
    position: relative;

    span {
      align-items: center;
      background-color: ${Colors.secondary + Opacity.op60};
      color: ${Colors.white};
      display: flex;
      font-size: 16px;
      justify-content: center;
      height: ${props => (props.big ? 40 : 30)}px;
      position: absolute;
      right: 0;
      top: -${props => (props.big ? 40 : 30)}px;
      width: ${props => (props.big ? 40 : 30)}px;

      svg {
        transition: 0.3s ease-in-out;
      }
    }
  }
`;
