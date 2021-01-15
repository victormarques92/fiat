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
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 24px;
  }

  ul {
    list-style: disc;
    padding-left: 20px;
  }
`;

export const Main = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 92px;
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
  border-left: 4px solid ${Colors.primary};
  border-radius: 0 0 20px 0;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: space-between;
  position: relative;
  width: 112px;

  ${props =>
    props.isActive &&
    css`
      &::before {
        content: '';
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 6px solid ${Colors.primary};
        height: 0;
        left: -10px;
        position: absolute;
        top: calc(50% - 3px);
        width: 0;
      }
    `}

  div {
    height: calc(100% - 14px);
    padding: 8px;
    transition: 0.15s ease-in-out;

    img {
      max-width: 100%;
    }
  }

  span {
    color: ${Colors.greyMedium};
    font-size: 10px;
    font-weight: 700;
    line-height: 14px;
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
    margin-top: 12px;
  }
`;
