import styled from 'styled-components';
import Colors from '../../styles/colors';

export const CallToAction = styled.div`
  align-items: center;
  background-color: ${Colors.primary};
  display: flex;
  height: 120px;
  justify-content: center;

  span {
    color: ${Colors.white};
    font-size: 16px;
    font-weight: 700;
    margin-right: 16px;
  }

  a {
    align-items: center;
    background-color: ${Colors.secondary};
    color: ${Colors.white};
    display: flex;
    font-size: 12px;
    font-weight: 700;
    height: 40px;
    justify-content: center;
    padding: 12px;
    text-transform: uppercase;

    & + a {
      margin-left: 2px;
    }
  }
`;
