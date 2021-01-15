import styled from 'styled-components';
import Colors, { Opacity } from '../../styles/colors';

export const Container = styled.div`
  border-radius: 0 0 0.75rem 0;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    svg {
      transform: scale(1.3);
    }
  }

  img {
    height: 100%;
    margin-bottom: -0.25rem;
    width: 100%;
  }

  footer {
    background-color: white;
    color: ${Colors.primary};
    font-size: ${props => (props.big ? 1.25 : 0.75)}rem;
    font-weight: 700;
    line-height: ${props => (props.big ? 1.25 : 0.625)}rem;
    padding: ${props => (props.big ? 0.75 : 0.5)}rem;
    position: relative;

    span {
      align-items: center;
      background-color: ${Colors.secondary + Opacity.op60};
      color: ${Colors.white};
      display: flex;
      font-size: 1rem;
      justify-content: center;
      height: ${props => (props.big ? 2.5 : 1.875)}rem;
      position: absolute;
      right: 0;
      top: -${props => (props.big ? 2.5 : 1.875)}rem;
      width: ${props => (props.big ? 2.5 : 1.875)}rem;

      svg {
        transition: 0.3s ease-in-out;
      }
    }
  }
`;
