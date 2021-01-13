import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  background-color: #3b369e;
  font-size: 1rem;
  min-height: 100vh;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 80px 16px 32px;
`;

const bounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(15px);
  }
`;

export const NextSection = styled.a`
  align-items: center;
  animation: ${bounce} 1s linear infinite;
  color: white;
  display: flex;
  font-size: 40px;
  justify-content: center;
  margin-top: 16px;
`;
