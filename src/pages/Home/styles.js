import styled from 'styled-components';
import Colors from '../../styles/colors';

export const CallToAction = styled.div`
  align-items: center;
  background-color: ${Colors.primary};
  display: flex;
  height: 7.5rem;
  justify-content: center;

  span {
    color: ${Colors.white};
    font-size: 1rem;
    font-weight: 700;
    margin-right: 1rem;
  }

  a {
    align-items: center;
    background-color: ${Colors.secondary};
    color: ${Colors.white};
    display: flex;
    font-size: 0.75rem;
    font-weight: 700;
    height: 2.5rem;
    justify-content: center;
    padding: 0.75rem;
    text-transform: uppercase;

    & + a {
      margin-left: 0.125rem;
    }
  }
`;
