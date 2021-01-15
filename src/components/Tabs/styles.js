import styled, { css, keyframes } from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

export const Details = styled.div`
  left: 0;
  position: absolute;
  top: 0;

  h3 {
    ${Colors.grey};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.25rem;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: disc;
    padding-left: 1.25rem;
  }
`;

export const Main = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 5.75rem;
  width: 100%;
`;

export const Controller = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Item = styled.div`
  align-items: center;
  background-color: ${Colors.white};
  border-left: 0.25rem solid ${Colors.primary};
  border-radius: 0 0 1.25rem 0;
  box-shadow: 0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 5rem;
  justify-content: space-between;
  position: relative;
  width: 7rem;

  ${props =>
    props.isActive &&
    css`
      &::before {
        content: '';
        border-top: 0.375rem solid transparent;
        border-bottom: 0.375rem solid transparent;
        border-right: 0.375rem solid ${Colors.primary};
        height: 0;
        left: -0.625rem;
        position: absolute;
        top: calc(50% - 0.1875rem);
        width: 0;
      }
    `}

  div {
    height: calc(100% - 0.875rem);
    padding: 0.5rem;
    transition: 0.15s ease-in-out;

    img {
      max-width: 100%;
    }
  }

  span {
    color: ${Colors.greyMedium};
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 0.875rem;
  }

  &:hover {
    div {
      padding: 0;
    }
  }

  ${props =>
    props.isActive &&
    css`
      div {
        padding: 0;
      }
    `}

  & + div {
    margin-top: 0.75rem;
  }
`;
