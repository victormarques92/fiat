import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.section`
  background-color: ${Colors.light};
  height: 100vh;
  padding-bottom: 1.25rem;
  padding-top: 1.25rem;

  h2 {
    color: ${Colors.primary};
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 1.375rem;
    margin-bottom: 2.5rem;
    text-align: center;
  }
`;
