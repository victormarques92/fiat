import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.section`
  background-color: ${Colors.light};
  height: 100vh;
  padding-bottom: 20px;
  padding-top: 20px;

  h2 {
    color: ${Colors.primary};
    font-size: 22px;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 40px;
    text-align: center;
  }
`;
